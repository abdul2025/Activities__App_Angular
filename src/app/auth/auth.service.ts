import { Router } from '@angular/router';
import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface AuthRespData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;

}


@Injectable({ providedIn: 'root' })
export class AuthService {

  user = new BehaviorSubject<User>(null);
  apiKey = '';
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) { }



  signup(email: string, password: string) {
    return this.http.post<AuthRespData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`, {
      email: email,
      password: password,
      returnSecureToken: true
    }
    ).pipe(catchError(this.handleError), tap(resDate => {
      this.handleAuthentication(resDate.email, resDate.localId, resDate.idToken, +resDate.expiresIn);
    }));
  }

  login(email: string, password: string) {
    return this.http.post<AuthRespData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`, {
      email: email,
      password: password,
      returnSecureToken: true
    }
    ).pipe(catchError(this.handleError), tap(resDate => {

      this.handleAuthentication(resDate.email, resDate.localId, resDate.idToken, +resDate.expiresIn);
    }));
  }


  autoLogin() {
    const userDate: {
      email: string,
      id: string,
      _token: string,
      _tokenExprirationDate: string
    } = JSON.parse(localStorage.getItem('userDate'));
    if (!userDate) {
      return;
    }
    const loadedUser = new User(userDate.email, userDate.id, userDate._token, new Date(userDate._tokenExprirationDate));

    if (loadedUser.token) {

      this.user.next(loadedUser);
      const expirationDuration = new Date(userDate._tokenExprirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }


  logout() {
    this.user.next(null);
    this.router.navigate(['./auth']);
    localStorage.removeItem('userDate');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }
  autoLogout(expirationDuration: number) {

    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }






  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email,
      userId,
      token,
      expirationDate
    );
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userDate', JSON.stringify(user));
  }


  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    console.log(errorRes.error.error);
    if (!errorRes || !errorRes.error.error) {
      throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exsists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exsists, Please Join us';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid Password';
        break;
      case 'USER_DISABLED':
        errorMessage = 'Your Account has Disabled';
        break;
    }
    return throwError(errorMessage);
  }


}

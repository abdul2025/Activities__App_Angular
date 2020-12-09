import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpParams } from '@angular/common/http';


@Injectable()


export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      /// take (1) so that we say execute this only one time..
      take(1),
      exhaustMap(user => {
        if (user === null) {
          return next.handle(req);
        }
        console.log(user);
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token)
        });
        console.log(modifiedReq);
        return next.handle(modifiedReq);
      }));

  }



}

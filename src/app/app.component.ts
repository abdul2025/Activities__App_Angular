import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private userSub: Subscription;
  isAuthenticated = false;
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/view', icon: 'view_quilt', title: 'View Tasks' },
  ];
  socialMedialinks = [
    { path: 'https://github.com/abdul2025', iconImgPath: '/assets/img/github-icon.png', title: 'GitHub' },
    { path: 'https://twitter.com/wahbi_jed', iconImgPath: '/assets/img/twitter-icon.png', title: 'Twitter' },
  ];

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.autoLogin();
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}

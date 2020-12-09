import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() sideNav;
  private userSub: Subscription;
  isAuthenticated = false;
  constructor(private authService: AuthService, private router: Router) { }




  ngOnInit(): void {
    this.sideNav.opened = false;
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }


  toggleSideNavMenu() {
    this.sideNav.opened = !this.sideNav.opened;
  }


  onLogout() {
    this.authService.logout();
  }


  ngOnDestroy() {
    this.userSub.unsubscribe();
  }


}

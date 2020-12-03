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
  constructor(private authService: AuthService) { }




  ngOnInit(): void {
    this.sideNav.opened = false;
    console.log(this.isAuthenticated);
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }


  toggleSideNavMenu() {
    this.sideNav.opened = !this.sideNav.opened;
  }


  ngOnDestroy() {
    this.userSub.unsubscribe();
  }


}

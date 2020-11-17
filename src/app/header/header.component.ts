import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sideNav;

  constructor() { }

  ngOnInit(): void {
  }


  toggleSideNavMenu() {
    this.sideNav.opened = !this.sideNav.opened;
  }


}

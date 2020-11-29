import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/view', icon: 'view_quilt', title: 'View Tasks' },
  ];
  socialMedialinks = [
    { path: 'https://github.com/abdul2025', iconImgPath: '/assets/img/github-icon.png', title: 'GitHub' },
    { path: 'https://twitter.com/wahbi_jed', iconImgPath: '/assets/img/twitter-icon.png', title: 'Twitter' },
  ];
}

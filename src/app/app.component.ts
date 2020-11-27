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
}

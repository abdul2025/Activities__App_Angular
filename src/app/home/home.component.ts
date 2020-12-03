import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    navText: ['<---', '--->'],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 1
      },
      440: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1740: {
        items: 1
      }
    },
    nav: true
  }

  slidesStore = [
    { id: 1, src: '/assets/img/blog_angular.png', alt: 'imgs', title: 'Project Ideas', link: 'https://www.upgrad.com/blog/angular-project-ideas-topics-for-freshers/' },
    { id: 2, src: '/assets/img/front-end-master.png', alt: 'imgs', title: 'Course', link: 'https://frontendmasters.com/learn/angular/' },
    { id: 2, src: '/assets/img/javascript-artical.png', alt: 'imgs', title: 'JavaScript', link: 'https://2019.stateofjs.com/overview/' },
  ];

  socialMedialinks = [
    { path: 'https://github.com/abdul2025', iconImgPath: '/assets/img/github-icon.png', title: 'GitHub' },
    { path: 'https://twitter.com/wahbi_jed', iconImgPath: '/assets/img/twitter-icon.png', title: 'Twitter' },
  ];

  constructor() { }

  ngOnInit(): void {
  }



}

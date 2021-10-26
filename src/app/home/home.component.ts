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
    { id: 1, src: 'https://www.monocubed.com/wp-content/uploads/2021/03/Tips-to-improve-angularjs-performance.jpg', alt: 'imgs', title: 'Project Ideas', link: 'https://www.monocubed.com/angularjs-performance-tips/' },
    { id: 2, src: 'https://brain-mentors.com/wp-content/uploads/2020/05/FRONTENDcoursestemplate.png', alt: 'imgs', title: 'Course', link: 'https://frontendmasters.com/learn/angular/' },
    { id: 2, src: 'https://miro.medium.com/max/1024/1*-2VDe74tjLJnng9k9g6Cqg.jpeg', alt: 'imgs', title: 'JavaScript', link: 'https://2019.stateofjs.com/overview/' },
  ];

  slidesStoreTwo = [
    { id: 1, src: 'https://gilesmetcalfedigital.co.uk/wp-content/uploads/2016/01/blogging.jpg', alt: 'imgs', title: 'Project Ideas', link: 'https://gilesmetcalfedigital.co.uk/blog-dont-know-blog' },
    { id: 2, src: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/Healthy-living-best-blog-2020-1296x728-header-1296x728.jpg?h=3019', alt: 'imgs', title: 'Course', link: 'https://www.healthline.com/health/best-healthy-living-blogs#1' },
    { id: 2, src: 'https://www.phoneworld.com.pk/wp-content/uploads/2020/01/shutterstock_720876373.jpg',
     alt: 'imgs', title: 'JavaScript', link: 'https://www.business2community.com/blogging/benefits-blogging-marketing-purposes-02015999/' },
  ];



  constructor() { }

  ngOnInit(): void {
  }



}

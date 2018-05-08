import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public carouselOne: NgxCarousel;
  public imageUrlArray:Array<string>;
  constructor(private router: Router) {
    this.imageUrlArray = [ 'assets/images/building.jpg', 'assets/images/building.jpg', 'assets/images/building.jpg' ]
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
    });
    
  	this.carouselOne = {
      grid: {xs: 1, sm: 2, md: 2, lg: 2, all: 0},
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }

  }
  public myfunc(event: Event) {
     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel
  }

}

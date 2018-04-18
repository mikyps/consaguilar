import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  //@ViewChild('slideshow') slideshow: ElementRef;
  public imageUrlArray:Array<string>;
  constructor() {
  	this.imageUrlArray = [ 'assets/images/slide.jpg', 'assets/images/slide.jpg' ]
  }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewChecked, ElementRef,  HostListener } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,

})
export class HeaderComponent implements OnInit {
  //@ViewChild('slideshow') slideshow: ElementRef;
  public imageUrlArray:Array<string>;
  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event) {
      //console.debug("Scroll Event");
      $('.redes').css('position', 'fixed');
  }
  /*scrollHandler2(event) {
      console.debug("Scroll Event");
      $('.btn-cot').css('position', 'fixed');
  }*/

  constructor() {
  	this.imageUrlArray = [ 'assets/images/slide.jpg', 'assets/images/minimalista/lounge.jpg', 'assets/images/minimalista/diningroom.jpg' ]
  }

 

  ngOnInit() {
    /* ======= Template MegaMenu  ======= */
    $('#menu-1').megaMenu({
        // DESKTOP MODE SETTINGS
        logo_align: 'left', // align the logo left or right. options (left) or (right)
        links_align: 'left', // align the links left or right. options (left) or (right)
        socialBar_align: 'left', // align the socialBar left or right. options (left) or (right)
        searchBar_align: 'right', // align the search bar left or right. options (left) or (right)
        trigger: 'hover', // show drop down using click or hover. options (hover) or (click)
        effect: 'expand-top', // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
        effect_speed: 400, // drop down show speed in milliseconds
        sibling: true, // hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
        outside_click_close: true, // hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
        top_fixed: false, // fixed the menu top of the screen. options (true) or (false)
        sticky_header: true, // menu fixed on top when scroll down down. options (true) or (false)
        sticky_header_height: 200, // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
        menu_position: 'horizontal', // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
        full_width: false, // make menu full width. options (true) or (false)
        // MOBILE MODE SETTINGS
        mobile_settings: {
            collapse: true, // collapse the menu on click. options (true) or (false)
            sibling: true, // hide the others showing drop downs when click on current drop down. options (true) or (false)
            scrollBar: true, // enable the scroll bar. options (true) or (false)
            scrollBar_height: 400, // scroll bar height in px value. this option works if the scrollBar option true.
            top_fixed: false, // fixed menu top of the screen. options (true) or (false)
            sticky_header: false, // menu fixed on top when scroll down down. options (true) or (false)
            sticky_header_height: 200 // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
        }
    });
  }

}

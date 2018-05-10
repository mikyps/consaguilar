import { Component, OnInit,  HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styles: []
})
export class NosotrosComponent implements OnInit {
  public imageUrlArray:Array<string>;
  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event) {
      //console.debug("Scroll Event");
      $('.redes').css('position', 'fixed');
  }
  constructor(private router: Router) { }

  ngOnInit() {
  	this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
    });
  }

}

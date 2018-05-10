import { Component, OnInit,  HostListener } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';
import { Router, NavigationEnd } from '@angular/router';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {
  public imageUrlArray:Array<string>;
  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event) {
      //console.debug("Scroll Event");
      $('.redes').css('position', 'fixed');
  }
  constructor(private scrollService: ScrollToService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
    });
  }

  option(element) {
  		$('.personaliza').show();
        this.scrollService.scrollTo(element);
  }

}

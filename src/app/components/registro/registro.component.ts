import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';

declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

  constructor(private scrollService: ScrollToService) { }

  ngOnInit() {
  }

  option(element) {
  		$('.personaliza').show();
        this.scrollService.scrollTo(element);
  }

}

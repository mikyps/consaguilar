import { Component, OnInit, ViewChild } from '@angular/core';
import {  } from '@types/googlemaps';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
  	let mapProp = {
      zoom: 13,
      center: new google.maps.LatLng(49.193561, -123.122752),
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      size: new google.maps.Size(480,240)

    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    let marker = new google.maps.Marker({
        map: this.map,
        //url:'https://www.google.com.bo/maps/place/9111+Beckwith+Rd,+Richmond,+BC+V6X+1V7,+Canad%C3%A1/@49.1936702,-123.125503,17z/data=!4m5!3m4!1s0x548674e1ae034b8d:0x41f0a21354a98fc7!8m2!3d49.1936702!4d-123.1233143?hl=es',
        position: new google.maps.LatLng(49.193561, -123.122752)
    });

    google.maps.event.addListener(marker, 'click', function() {

      //  window.open(marker.url);
    });

  }

}

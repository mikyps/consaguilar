import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styles: []
})
export class DepartamentoComponent implements OnInit {
	private parameter:string;
  public imageUrlArray:Array<string>;
  public title1:string;
  public title2:string;
  public htmltext:any;
  public show:string;

  
  constructor(private _route:ActivatedRoute,
  	private _router: Router,
    public _http: HttpClient) { 
    
  	this._route.params.forEach((params: Params)=>{
  		
        this.parameter = params['tipo'];
        if (params['tipo'] == 'domotica') {
          this.title1 = 'Un departamento';
          this.title2 ='Inteligente';
          $('#project').hide();
          this.htmltext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper nulla nec orci tempus euismod. Integer hendrerit, diam a porta vestibulum, elit eros finibus nisl, nec ullamcorper ex Ut eu turpis.';
          this.imageUrlArray = [ 'assets/images/domotica/smart-home-3096219_1920.jpg','assets/images/domotica/smart-home-3096224_1920.jpg' ]
        }
        else{
        	if (params['tipo'] == 'estilo' || params['tipo'] == 'minimalista') {
            this.title1 = 'Estilo';
            this.title2 ='Minimalista';
            $('#project').show();
            this.htmltext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper nulla nec orci tempus euismod. Integer hendrerit, diam a porta vestibulum, elit eros finibus nisl, nec ullamcorper ex Ut eu turpis.';
            this.imageUrlArray = [ 'assets/images/diningroom.jpg','assets/images/lounge.jpg' ]
        	}
        	else
        	{
            if (params['tipo'] == 'contemporaneo') {
                this.title1 = 'Estilo';
                this.title2 ='Contemporaneo';
                $('#project').show();
                this.htmltext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper nulla nec orci tempus euismod. Integer hendrerit, diam a porta vestibulum, elit eros finibus nisl, nec ullamcorper ex Ut eu turpis.';
                this.imageUrlArray = [ 'assets/images/contemporaneo/indoors.jpg', 'assets/images/contemporaneo/kitchen.jpg' ]
            }
            else
            {
              if (params['tipo'] == 'amoblado') {
                this.title1 = 'Departamento';
                this.title2 ='llave en mano';
                $('#project').hide();
                this.htmltext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper nulla nec orci tempus euismod. Integer hendrerit, diam a porta vestibulum, elit eros finibus nisl, nec ullamcorper ex Ut eu turpis.';
                this.imageUrlArray = [ 'assets/images/muebles/04.jpg','assets/images/muebles/05.jpg','assets/images/muebles/06.jpg' ]

              }
              else
              {
                this.title1 = 'Departamento';
                this.title2 ='llave en mano';
                $('#project').hide();
                this.htmltext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper nulla nec orci tempus euismod. Integer hendrerit, diam a porta vestibulum, elit eros finibus nisl, nec ullamcorper ex Ut eu turpis.';
                this.imageUrlArray = [ 'assets/images/personalizado/interior-2685521_1920.jpg','assets/images/personalizado/interior-3012218_1920.png' ]
              }
            }
        		//Personalizado
        	}
        }
       
  	});
  }

  ngOnInit() {
    this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
    });
    
  }

}

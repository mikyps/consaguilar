import { Component, OnInit,  HostListener } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { RequestService } from '../../services/request.service';
/*import { Http, Response, Headers } from '@angular/http';
import "rxjs/Rx";*/
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styles: [],
  providers: [RequestService]
})
export class CotizacionComponent implements OnInit {
  public imageUrlArray:Array<string>;
  private parameter:string;
    public recipient: string;
    public subject: string;
    public message: string;
    private mailgunUrl: string = "sandboxce55dce9b57e4cb5a8b73b4cbcfd3896.mailgun.org";
    private apiKey: string = "key-be0c2995e07d3fb7b1e05f36e0a968c3";
    public name: string;
    public whatsapp: string;
    public tipo:string;

  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event) {
      //console.debug("Scroll Event");
      $('.redes').css('position', 'fixed');
  }
  constructor(private _route:ActivatedRoute, private router: Router, public _http: HttpClient, private _requestService: RequestService,/*, private http: Http*/) { 
    this._route.params.forEach((params: Params)=>{
        //alert(params['tipo']);
        this.parameter = params['tipo'];
        
       
    });
    //Top Page
    this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
    });
  }

  ngOnInit() {
    //alert(this.parameter);
    $('#tipo').val(this.parameter);
    
  }
public send() { 
        this.subject = 'Contact  Form';//" + this.recipient + "
        let body = "from=test@example.com&to=jennyfervl@hotmail.com&subject=" + this.subject + "&text=" + this.message;
        //if(this.recipient && this.subject && this.message) {
          alert('dd');
          this._requestService.send(body).subscribe(
              data => {
                  alert(data);
                },
              error => {
                alert(error);
                console.log("ERROR -> " + JSON.stringify(error));
                var errorMessage = <any>error;
                console.log(errorMessage);

              }
            );
            /*let headers = new Headers(
                {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + this.apiKey
                }
            );
            let options = new RequestOptions({ headers: headers });*/
            /*let headers = new HttpHeaders().set('Authorization',"Basic " + this.apiKey);
            let body = "from=test@example.com&to=" + this.recipient + "&subject=" + this.subject + "&text=" + this.message;
            this._http.post("https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages", body, {headers: headers});/*
                .map(result => result.json())
                .do(result => console.log("RESULT: ", JSON.stringify(result)))
                .subscribe(result => {
                    console.log("SENT!");
                    this.recipient = "";
                    this.subject = "";
                    this.message = "";
                }, error => {
                    console.log(error);
                });*/
        //}
    }
     /*public send(){
        let url = 'https://api.mailgun.net/v3/'+this.mailgunUrl+'/messages';
        let headers: Headers = new Headers();
        headers.append('Authorization','Basic '+  btoa('api:'+this.apiKey));
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        let opts: RequestOptions = new RequestOptions();
        opts = headers;
        let body = "from=test@example.com&to=" + this.recipient + "&subject=" + this.subject + "&text=" + this.message;
        this._http.post(url, 
            /*{
                from: '"Mailgun Sandbox" <postmaster@sandboxce55dce9b57e4cb5a8b73b4cbcfd3896.mailgun.org>', 
                to: "Test <jennyfervl@hotmail.com>",
                subject: 'Hello ',
                text: 'Congratulations, you just sent an email with Mailgun!  You are truly awesome!'
            }*//*body,
            opts
        ).subscribe(
            success => {
                console.log("SUCCESS -> " + JSON.stringify(success));
            }, error => {
                console.log("ERROR -> " + JSON.stringify(error));
            }
        );
    }*/

  /*cotizar(){
    var name = $('#name').val();
    var email = $('#name').val();
    var whatsapp = $('#name').val();
    var message = $('#name').val();
    /*Email.send("from@you.com",
    "to@them.com",
    "This is a subject",
    "this is the body",
    "smtp.yourisp.com",
    "username",
    "password");*/
  /*}*/

}

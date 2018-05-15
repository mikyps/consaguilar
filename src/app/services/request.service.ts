import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class RequestService{
  //public url: string;
  private mailgunUrl: string = "sandboxce55dce9b57e4cb5a8b73b4cbcfd3896.mailgun.org";
  private apiKey: string = "key-be0c2995e07d3fb7b1e05f36e0a968c3";

  constructor(
    public _http: HttpClient
  ){
    //this.url = 'http://amarketdirect.com/api';
  }

  /*getContact(){
    return this._http.get(this.url)
                     .map( res => res.json());
  }*/

  /*genericToken():Observable<any>{
    let url = this.url + "/GetGenericToken";
    return this._http.get(url);
  }

  getToken(): string{
    //localStorage.clear();
    let session = JSON.parse(localStorage.getItem("SessionSite"));
            if (typeof (Storage) !== 'undefined' && typeof (localStorage) !== 'undefined') {

                if (typeof session !== undefined && session != null) {

                    if (session.session === true && session.token) {

                      return session.token;
                    }
                }
                else{

                    this.genericToken().subscribe(data => {
                      var targetPage = "SessionSite";
                      if (data.AccessToken != "") {
                          session = localStorage.setItem(targetPage, '{"session":true, "userid":0, "token":"' + data.AccessToken + '"}');
                          return session.token;
                      }
                    });

                }
            }
            else{
                this.genericToken().subscribe(data => {
                  let targetPage = "SessionSite";
                  if (data.AccessToken != "") {
                      session = localStorage.setItem(targetPage, '{"session":true, "userid":0, "token":"' + data.AccessToken + '"}');
                      return session.token;
                  }
                });


            }
  }

  send(contact:Contact): Observable<any>{
    let token:string = this.getToken();
    let headers = new HttpHeaders().set('api_key',token);
    let email = "support@amarketdirect.com";
    let params = "?emailTemplateId=1&emailTo="+email;
    contact.websiteurl = "www.amarketdirect.com";

    return this._http.post(this.url+'/Email/SendTemplate'+params, contact, {headers: headers});
  }*/

  send(body:any): Observable<any> { 
        /*this.subject = 'Contact  Form';
        if(this.recipient && this.subject && this.message) {*/
            let headers = new HttpHeaders(
                /*{
                    "Content-Type": "application/x-www-form-urlencoded",
                    "authorization": "Basic " + this.apiKey
                }*/
                {"Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic "+ this.apiKey,
    "Cache-Control": "no-cache",
     'Access-Control-Allow-Origin': '*',///,
     'Access-Control-Allow-Methods':'GET,PUT,POST,OPTIONS',/*,*/
   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
   'Access-Control-Request-Headers': 'X-Requested-With, accept, content-type',
   //,
   ///'Access-Control-Allow-Headers': ' Origin, Content-Type, X-Auth-Token',
  /*"Access-Control-Allow-Credentials":"true"*/}
            );
            /*let options = new RequestOptions({ headers: headers });*/
            //let headers = new HttpHeaders().set('Authorization',"Basic " + this.apiKey);
            //let body = "from=test@example.com&to=" + this.recipient + "&subject=" + this.subject + "&text=" + this.message;
            return this._http.post("https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages", body, {headers: headers});/*
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

}

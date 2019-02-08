import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthService: BasicAuthService) { }

//start intercept http requests 
  intercept(req: HttpRequest<any>, next: HttpHandler){
   // let username = 'admin';
    // let password = 'testing';

    // //windox.btoa() is a base-64 encryption
    // let basicAuthHttpHeader = 'Basic ' + window.btoa(username +':'+ password);

    let basicAuthHttpHeader = this.basicAuthService.getToken();
    let user = this.basicAuthService.getAuthUser();

    if(basicAuthHttpHeader && user){
      //modifying http requests
      req = req.clone(
        {
          setHeaders:
          {
            Authorization : basicAuthHttpHeader
          }
      });
  
    }


    //send back the request;
    return next.handle(req);
  }
}

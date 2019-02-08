import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {API_URL} from '../app.constant';

import {map} from 'rxjs/operators';

export const TOKEN = 'token';
export const AUTHUSER = 'username';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) { }

  // authenicateUser(username: string, password: string): boolean{

  //   console.log('Before logged In' + this.isUserLogin());
  //   //simple logic
  //   if(username === '123' && password ==='456'){
  //     sessionStorage.setItem('username', username);
  //     console.log('After logged In' + this.isUserLogin());
  //     return true;
  //   }
  //     console.log('After logged In' + this.isUserLogin() + 'failed');
  //     return false;

  // }

  executeBasicAuth(username, password){
    //windox.btoa() is a base-64 encryption
    let basicAuthHttpHeader = 'Basic ' + window.btoa(username +':'+ password);
    console.log('service connected');

    //Creation of Http Header
    let headers = new HttpHeaders({
      Authorization : basicAuthHttpHeader
    });
    
    // ' does not function the same as `
    return this.http.get<testingClass>(`${API_URL}/basic_auth/all`,
    {headers}
    )

    //if valid response is received, we can perform more tasks by using pipe(). Pipe() will be executed once the reponse is received from Web Services
    .pipe(
      map(
          data=> {
            sessionStorage.setItem(AUTHUSER, username);
            sessionStorage.setItem(TOKEN, basicAuthHttpHeader);
            return data;
          }
      )
    );
  }


  isUserLogin(): boolean{
    let user = sessionStorage.getItem(AUTHUSER);
    
    return !(user === null);
  }

  userLogout(): void{
    sessionStorage.removeItem(AUTHUSER);
    sessionStorage.removeItem(TOKEN);
  }

  getAuthUser(){
    return sessionStorage.getItem(AUTHUSER);   
  }

  getToken(){
    if(this.getAuthUser())
      return sessionStorage.getItem(TOKEN);   
  }

}

export class testingClass{
  constructor(
    public message: string
  ){}
}

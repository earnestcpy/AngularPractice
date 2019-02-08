import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestingdataService {

  constructor(private httpClient: HttpClient) { }

  executeServices(){
    console.log('service connected');
    //return this.httpClient.get('http://localhost:8383/notes_api/notes');

    let basicAuthHttpHeader = this.createBasicAuthHardCodedHttpHeader();
    //Creation of Http Header
    let headers = new HttpHeaders({
      Authorization : basicAuthHttpHeader
    });
    return this.httpClient.get('http://localhost:8383/notes_api/author/2/notes',
    {headers}
    );
  }

  createBasicAuthHardCodedHttpHeader(){
    let username = 'admin';
    let password = 'testing';


    //windox.btoa() is a base-64 encryption
    let basicAuthHttpHeader = 'Basic ' + window.btoa(username +':'+ password);
    return basicAuthHttpHeader;
  }
}

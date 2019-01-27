import { Injectable } from '@angular/core';


//@Injectable is required to inject service in any place in the application
//make this component/service available for Dependency injection
@Injectable({
  providedIn: 'root'
})
export class HardcodedauthService {

  constructor() { }

  //HardcodedauthService service provides authenication logic to the application
  authenicateUser(username, password){
    //simple logic
    if(username=== '123' && password ==='456'){
      return true;
    }
    else 
    return false;
  }
}

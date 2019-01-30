import { Injectable } from '@angular/core';


//@Injectable is required to inject service in any place in the application
//make this component/service available for Dependency injection
@Injectable({
  providedIn: 'root'
})
export class HardcodedauthService {

  constructor() { }

  //HardcodedauthService service provides authenication logic to the application
  authenicateUser(username: string, password: string): boolean{

    console.log('Before logged In' + this.isUserLogin());
    //simple logic
    if(username === '123' && password ==='456'){
      sessionStorage.setItem('username', username);
      console.log('After logged In' + this.isUserLogin());
      return true;
    }
      console.log('After logged In' + this.isUserLogin() + 'failed');
      return false;

  }


  isUserLogin(): boolean{
    let user = sessionStorage.getItem('username');
    
    return !(user === null);
  }
}

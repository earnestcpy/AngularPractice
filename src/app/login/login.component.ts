import { Component, OnInit } from '@angular/core';

// Inject Router into LoginComponent
import { Router } from '@angular/router';
import { HardcodedauthService } from '../service/hardcodedauth.service';
import { BasicAuthService } from '../service/basic-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username= '';
  password= '';
  errorMessage= 'Invalid Credential(s)';
  errorMessageInValid = false;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router,
    private hardcodedauthService: HardcodedauthService,
    private basicAuthService: BasicAuthService) { }


  ngOnInit() {
  }

  handleLogin(){
    //HardCoded
    console.log(this.username  + this.password);
    if(this.hardcodedauthService.authenicateUser(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
      this.errorMessageInValid= false;
    }
    else{
      console.log('false');
      this.errorMessageInValid= true; 
    }
  }

  handleBasicAuthLogin(){
    console.log("handle Basic Auth " + this.username  + this.password);
    //if(this.hardcodedauthService.authenicateUser(this.username, this.password)){
      this.basicAuthService.executeBasicAuth(this.username, this.password).subscribe(
        response =>{
          console.log(response)
          this.router.navigate(['welcome', this.username]);
          this.errorMessageInValid= false;
        },
        error =>{
          console.log(error)
          console.log('false');
          this.errorMessageInValid= true; 
        }
      );
    }
}

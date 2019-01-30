import { Component, OnInit } from '@angular/core';

// Inject Router into LoginComponent
import { Router } from '@angular/router';
import { HardcodedauthService } from '../service/hardcodedauth.service';


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
    private HardcodedauthService: HardcodedauthService) { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username  + this.password);
    if(this.HardcodedauthService.authenicateUser(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
      this.errorMessageInValid= false;
    }
    else{
      console.log('false');
      this.errorMessageInValid= true; 
    }
  }

}

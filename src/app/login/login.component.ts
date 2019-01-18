import { Component, OnInit } from '@angular/core';

// Inject Router into LoginComponent
import { Router } from '@angular/router';


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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username  + this.password);
    if(this.username=== '123' && this.password ==='456'){
      this.router.navigate(['welcome']);
      this.errorMessageInValid= false;
    }
    else{
      console.log('false');
      this.errorMessageInValid= true; 
    }
  }

}

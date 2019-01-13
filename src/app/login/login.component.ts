import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username  + this.password);
    if(this.username=== '123'){
      this.errorMessageInValid= false;
    }
    else{
      this.errorMessageInValid= true; 
    }
  }

}

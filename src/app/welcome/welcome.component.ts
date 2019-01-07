import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

// @{Decorator}
@Component({
  // {attribute}
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  globalmessage= 'Welcome message from WelcomeComponent global';
  
  constructor() { }

  // void init(){}
  ngOnInit() {
    // ngOnInit(): void     {function(): return type}
    var localmessage:string = 'Welcome message from WelcomeComponent local';
    console.log(this.globalmessage);
    console.log(localmessage);
  }

}

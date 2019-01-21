import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


// @{Decorator}
@Component({
  // {attribute}
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  globalmessage= 'Welcome message from WelcomeComponent--global';
  name = '';
  

  //ActivatedRoute --pick up the current route which are active and accept the paramter which is passed in
  constructor(private route: ActivatedRoute) { }

  // void init(){}
  ngOnInit() {
    // ngOnInit(): void     {function(): return type}
    var localmessage:string = 'Welcome message from WelcomeComponent local';
    this.name = this.route.snapshot.params['name'];

    //get the parameter from ActivedRoute
    //console.log(this.route.snapshot.params['name']);
    console.log(this.globalmessage);
    console.log(localmessage);
  }

}

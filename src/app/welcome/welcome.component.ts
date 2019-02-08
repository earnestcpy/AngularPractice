import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestingdataService } from '../service/data/testingdata.service';
import { BasicAuthService } from '../service/basic-auth.service';


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
  constructor(private route: ActivatedRoute,
    private testingdataService: TestingdataService) { }

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
  getMessage(){
    console.log(this.testingdataService.executeServices());
    this.testingdataService.executeServices().subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
      //alternately way to do so : response => console.log(response)
    );
    
  }

  handleResponse(response){
    console.log(response);
  }

  handleError(error){
    console.log(error.error.message);
  }
}

import { Component, OnInit } from '@angular/core';
import { HardcodedauthService } from '../service/hardcodedauth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn: boolean = false;

  constructor(private hardcodedauthService: HardcodedauthService) { }

  ngOnInit() {
    //On Initiaition  or onCreate
   // this.isUserLoggedIn = this.hardcodedauthService.isUserLogin();
  }

}

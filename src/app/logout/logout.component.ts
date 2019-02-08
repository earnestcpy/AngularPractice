import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthService } from '../service/hardcodedauth.service';
import { BasicAuthService } from '../service/basic-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
    private hardCodedAuthService : HardcodedauthService,
    private basicAuthService: BasicAuthService) { }

  ngOnInit() {
    this.basicAuthService.userLogout();
  }

}

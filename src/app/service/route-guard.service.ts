import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedauthService } from './hardcodedauth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private router: Router,
    private hardcodedauthService: HardcodedauthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.hardcodedauthService.isUserLogin())
      return true;

    this.router.navigate(['error']);
    return false;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { LoginComponent } from '../login/login.component';
import { ErrorComponent } from '../error/error.component';
import { ListToDoComponent } from '../list-to-do/list-to-do.component';
import { LogoutComponent } from '../logout/logout.component';
import { RouteGuardService } from '../service/route-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent}, 
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},

  //passing parameter to WelcomeComponent
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]}, // activiated routing to component when controlling access; e.g user is logged in
                                                        // to do so, implement "canActivate" in RouteGuardService
                                                        //route can only be actived when canActivate() return true in RouteuardService
  {path: 'todos', component: ListToDoComponent, canActivate: [RouteGuardService]},

  {path: 'error', component: ErrorComponent},      // define unknown or undeclare path and route to Error Component
  {path: '**', component: ErrorComponent}      // define unknown or undeclare path and route to Error Component
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

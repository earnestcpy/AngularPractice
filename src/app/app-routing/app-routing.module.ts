import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { LoginComponent } from '../login/login.component';
import { ErrorComponent } from '../error/error.component';
import { ListToDoComponent } from '../list-to-do/list-to-do.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},

  //passing parameter to WelcomeComponent
  {path: 'welcome/:name', component: WelcomeComponent},
  {path: 'todos', component: ListToDoComponent},

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

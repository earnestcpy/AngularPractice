import { BrowserModule } from '@angular/platform-browser';    //Angular Module
import { NgModule } from '@angular/core';                     //Angular Module
import { FormsModule } from '@angular/forms';                 //Angular Module

import { AppComponent } from './app.component';               //Angular Component 
import { WelcomeComponent } from './welcome/welcome.component'; //Angular Component
import { LoginComponent } from './login/login.component'; //Angular Component
import { ErrorComponent } from './error/error.component';//Angular Component
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';    //Angular Module
import { NgModule } from '@angular/core';                     //Angular Module
import { FormsModule } from '@angular/forms';                 //Angular Module

import { AppComponent } from './app.component';               //Angular Component 
import { WelcomeComponent } from './welcome/welcome.component'; //Angular Component
import { LoginComponent } from './login/login.component';//Angular Component

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

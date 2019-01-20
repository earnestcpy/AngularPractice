import { BrowserModule } from '@angular/platform-browser';    //Angular Module
import { NgModule } from '@angular/core';                     //Angular Module
import { FormsModule } from '@angular/forms';                 //Angular Module

import { AppComponent } from './app.component';               //Angular Component 
import { WelcomeComponent } from './welcome/welcome.component'; //Angular Component
import { LoginComponent } from './login/login.component'; //Angular Component
import { ErrorComponent } from './error/error.component';//Angular Component
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ListToDoComponent } from './list-to-do/list-to-do.component';


// define and customize Angular Module called AppModule
@NgModule({

  //the following components are part of this specific module (AppModule)
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListToDoComponent
  ],
  // components in this specific AppModule need to import / work with the following module to finish tasks
  imports: [
    BrowserModule,
    FormsModule,  // FormsModule to use ngModule 
    AppRoutingModule // AppRouting Module to use single page routing 
  ],

  providers: [],
  
  // When this module is loaded, tell the application which component to be loaded.
  bootstrap: [AppComponent]  
})
export class AppModule { }

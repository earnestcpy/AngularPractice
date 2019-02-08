import { BrowserModule } from '@angular/platform-browser';    //Angular Module  @{}
import { NgModule } from '@angular/core';                     //Angular Module
import { FormsModule } from '@angular/forms';                 //Angular Module
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';               //Javascript Component 
import { WelcomeComponent } from './welcome/welcome.component'; //Javascript Component
import { LoginComponent } from './login/login.component'; //Javascript Component
import { ErrorComponent } from './error/error.component';//Javascript Component
import { AppRoutingModule } from './app-routing/app-routing.module'; //...
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';//...
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';



// define and customize Angular Module called AppModule
// Important: Angular Module is a group of directive and component, which are dedicated to a specific purpose.
@NgModule({

  //the following components are part of this specific module (AppModule)
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListToDoComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent
  ],
  // components in this specific AppModule need to import / work with the following module to finish tasks
  imports: [
    BrowserModule,
    FormsModule,  // FormsModule to use ngModule 
    AppRoutingModule, // AppRouting Module to use single page routing 
    HttpClientModule //Http request Module
  ],

  providers: [
     {
     provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true
   }
],
  
  // When this module is loaded, tell the application which component to be loaded.

  bootstrap: [AppComponent]   // initializing App component to be "Root Component" 
})
export class AppModule { }



// To reuse a component, import the corresponding module to app module.
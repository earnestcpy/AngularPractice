import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Bootstrapping AppModule in angular application to be Root Module
  // Whichever the first module is bootstrapped in angular application is called "Root Module"
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

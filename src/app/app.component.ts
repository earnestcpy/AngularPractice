import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /*  Create a new component or tag named "app-root" */
  templateUrl: './app.component.html', /* HTML template for app-root. Indicate the location of HTML template for this specific component */
  //template: '<h1>{{title}}</h1>',   template =/= templateUrl
  styleUrls: ['./app.component.css'] /* Style // CSS for app-root.  Indicate the location of HTML template for this specific component */
})
export class AppComponent {
  title = 'todo';
}

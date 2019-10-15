import { Component } from '@angular/core';
import { siteContent } from './strings/site-content';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  author=siteContent.author;
}

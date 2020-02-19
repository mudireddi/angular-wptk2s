import { Component } from '@angular/core';
import { Deprecated } from './decorators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Deprecate Angular component';
}

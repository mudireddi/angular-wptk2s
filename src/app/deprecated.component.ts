import { Component, Input } from '@angular/core';
import { Deprecated } from './decorators';

@Component({
  selector: 'deprecated-comp, new-comp',
  template: `<h1>{{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})

@Deprecated("deprecated-comp")
export class DeprecatedComponent  {
  @Input() name: string;
}

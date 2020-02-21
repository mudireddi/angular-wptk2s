import { Component, Input } from '@angular/core';
import { Deprecated } from './decorators';

@Component({
  selector: 'component-one',
  template: `<h1>Component One!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})

@Deprecated('component-one', 'component-two')
export class ComponentOne  {
  @Input() name: string;
}

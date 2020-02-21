import { Component, Input } from '@angular/core';
import { Deprecated } from './decorators';

@Component({
  selector: 'component-two',
  template: `<h1>Component Two</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})

@Deprecated('component-two', 'component-one')
export class ComponentTwo  {
  @Input() name: string;
}

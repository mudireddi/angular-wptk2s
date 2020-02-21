import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentTwo } from './component.two';
import { ComponentOne } from './component.one';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ComponentTwo, ComponentOne ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RadioButtonModule, SliderModule } from 'primeng';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RadioButtonModule, SliderModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

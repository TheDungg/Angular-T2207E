import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassComponent} from "./classroom/class.component";

@NgModule({
  declarations: [
    AppComponent, StudentComponent, ClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

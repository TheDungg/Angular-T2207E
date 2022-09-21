import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassComponent} from "./classroom/class.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login.component/login.component";

// khai bao cac pages trong website
@NgModule({
  declarations: [
    AppComponent, StudentComponent, ClassComponent, HomeComponent, LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

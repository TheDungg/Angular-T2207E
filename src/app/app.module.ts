import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {Page3Component} from "./page3/page3.component";

// khai bao cac pages trong website
const appRoutes: Routes = [
  {path: 'page1', component: Page1Component},
  {path: '', component: Page2Component},
  {path: '', component: Page3Component}
]
@NgModule({
  declarations: [
    AppComponent, Page1Component, Page2Component, Page3Component



  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

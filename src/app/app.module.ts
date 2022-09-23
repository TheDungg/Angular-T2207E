import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassComponent} from "./classroom/class.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login.component/login.component";
import {RouterModule, Routes} from "@angular/router";
import {ThedungComponent} from "./pages/thedung/thedung.component";
import {ContactUsComponent} from "./pages/contactUs/contactUs.component";
import {AboutUsComponent} from "./pages/aboutUs/aboutUs.component";
import {FoodComponent} from "./food/food.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";

// khai bao cac pages trong website
const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'thedung', component: ThedungComponent},
  {path:'contactUs', component: ContactUsComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path: 'food', component: FoodComponent}

]
@NgModule({
  declarations: [
    AppComponent, StudentComponent, ClassComponent, HomeComponent, LoginComponent, ThedungComponent, FoodComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

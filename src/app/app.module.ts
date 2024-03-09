import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterStep1Component } from './register-step1/register-step1.component';
import { FormcompanyComponent } from './company/formcompany/formcompany.component';
import { Formcompany2Component } from './company/formcompany2/formcompany2.component';
import { CheckemailComponent } from './company/checkemail/checkemail.component';
import { AccueilComponent } from './company/accueil/accueil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterStep1Component,
    FormcompanyComponent,
    Formcompany2Component,
    CheckemailComponent,
    AccueilComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

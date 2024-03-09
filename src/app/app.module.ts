import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterStep1Component } from './register-step1/register-step1.component';
import { FormcompanyComponent } from './company/formcompany/formcompany.component';
<<<<<<< HEAD
import { Formcompany2Component } from './company/formcompany2/formcompany2.component';
import { CheckemailComponent } from './company/checkemail/checkemail.component';
import { AccueilComponent } from './company/accueil/accueil.component';
=======
import { JobOfferComponent } from './job-offer/job-offer.component';
import { ListJobOffersComponent } from './list-job-offers/list-job-offers.component';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { TrainingOfferComponent } from './training-offer/training-offer.component';
>>>>>>> 72bbaca9d47b77bbc107b818a7d5a2171af16f20


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterStep1Component,
    FormcompanyComponent,
<<<<<<< HEAD
    Formcompany2Component,
    CheckemailComponent,
    AccueilComponent,
=======
    JobOfferComponent,
    ListJobOffersComponent,
    ListCompaniesComponent,
    TrainingOfferComponent,
>>>>>>> 72bbaca9d47b77bbc107b818a7d5a2171af16f20
   
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

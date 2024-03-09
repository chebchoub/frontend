import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterStep1Component } from './register-step1/register-step1.component';
import { FormcompanyComponent } from './company/formcompany/formcompany.component';
import { JobOfferComponent } from './job-offer/job-offer.component';
import { ListJobOffersComponent } from './list-job-offers/list-job-offers.component';
import { ListCompaniesComponent } from './list-companies/list-companies.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige le chemin vide vers 'home'
  { path: 'home', component: HomeComponent },
  { path: 'registerStep1', component: RegisterStep1Component },
  { path: 'formcompany', component: FormcompanyComponent },
  { path: 'jobOffer', component: JobOfferComponent },
  { path: 'jobOffers', component: ListJobOffersComponent },
  { path: 'companies', component: ListCompaniesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

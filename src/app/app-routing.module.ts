import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
>>>>>>> 72bbaca9d47b77bbc107b818a7d5a2171af16f20

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige le chemin vide vers 'home'
  { path: 'home', component: HomeComponent },
  { path: 'registerStep1', component: RegisterStep1Component },
  { path: 'formcompany', component: FormcompanyComponent },
<<<<<<< HEAD
  { path: 'formcompany2', component: Formcompany2Component },
  { path: 'CheckemailComponent', component: CheckemailComponent },
  { path: 'acceuil', component: AccueilComponent },




=======
  { path: 'jobOffer', component: JobOfferComponent },
  { path: 'jobOffers', component: ListJobOffersComponent },
  { path: 'companies', component: ListCompaniesComponent },
>>>>>>> 72bbaca9d47b77bbc107b818a7d5a2171af16f20
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

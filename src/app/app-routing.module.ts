import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterStep1Component } from './register-step1/register-step1.component';
import { FormcompanyComponent } from './company/formcompany/formcompany.component';
import { Formcompany2Component } from './company/formcompany2/formcompany2.component';
import { CheckemailComponent } from './company/checkemail/checkemail.component';
import { AccueilComponent } from './company/accueil/accueil.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige le chemin vide vers 'home'
  { path: 'home', component: HomeComponent},
  { path: 'registerStep1', component: RegisterStep1Component },
  { path: 'formcompany', component: FormcompanyComponent },
  { path: 'formcompany2', component: Formcompany2Component },
  { path: 'CheckemailComponent', component: CheckemailComponent },
  { path: 'acceuil', component: AccueilComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

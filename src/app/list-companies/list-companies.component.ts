import { Component } from '@angular/core';
import { companies } from '../companies.data';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css'],
})
export class ListCompaniesComponent {
  companies = companies;
}

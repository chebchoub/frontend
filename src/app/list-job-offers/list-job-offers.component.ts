import { Component } from '@angular/core';
import { jobOffers } from '../jobOffers.data';

@Component({
  selector: 'app-list-job-offers',
  templateUrl: './list-job-offers.component.html',
  styleUrls: ['./list-job-offers.component.css'],
})
export class ListJobOffersComponent {
  jobOffers = jobOffers;
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOfferComponent } from './training-offer.component';

describe('TrainingOfferComponent', () => {
  let component: TrainingOfferComponent;
  let fixture: ComponentFixture<TrainingOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingOfferComponent]
    });
    fixture = TestBed.createComponent(TrainingOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

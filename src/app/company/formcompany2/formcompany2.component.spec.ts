import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formcompany2Component } from './formcompany2.component';

describe('Formcompany2Component', () => {
  let component: Formcompany2Component;
  let fixture: ComponentFixture<Formcompany2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Formcompany2Component]
    });
    fixture = TestBed.createComponent(Formcompany2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

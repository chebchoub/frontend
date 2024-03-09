import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcompanyComponent } from './formcompany.component';

describe('FormcompanyComponent', () => {
  let component: FormcompanyComponent;
  let fixture: ComponentFixture<FormcompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcompanyComponent]
    });
    fixture = TestBed.createComponent(FormcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

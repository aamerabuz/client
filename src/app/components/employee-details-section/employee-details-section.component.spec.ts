import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsSectionComponent } from './employee-details-section.component';

describe('EmployeeDetailsSectionComponent', () => {
  let component: EmployeeDetailsSectionComponent;
  let fixture: ComponentFixture<EmployeeDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

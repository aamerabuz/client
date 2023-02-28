import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee, EmployeeTypeEnum } from 'src/app/models/app-interfaces';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-employee-details-section',
  templateUrl: './employee-details-section.component.html',
  styleUrls: ['./employee-details-section.component.scss'],
})
export class EmployeeDetailsSectionComponent implements OnInit {
  @ViewChild('f') form: any;
  public employeeManager: Employee = {
    id: -1,
    first: '',
    last: '',
    position: 0,
    managerId: 0,
  };
  public curentEmployee :Employee = {
    id: -1,
    first: '',
    last: '',
    position: 0,
    managerId: 0,
  }
  public employeeType : any = EmployeeTypeEnum
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.curentEmployee = this.appService.curentEmployee
    let managerId = this.appService.curentEmployee.managerId;
    this.employeeManager = this.appService.getManagerById(managerId)
  }

  createNewReport(): void {
    if (this.form.valid) {
    } else {
    }
  }
}

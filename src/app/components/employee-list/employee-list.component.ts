import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/app/models/app-interfaces';
import { AppService } from 'src/app/services/app.service';
import {Observable} from 'rxjs'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  
  employeeList$!:Observable<Employee[]>;

  constructor(private appService : AppService){

  }

  ngOnInit(): void {
    this.employeeList$ =  this.appService.getEmployeesList();
  
  }


}

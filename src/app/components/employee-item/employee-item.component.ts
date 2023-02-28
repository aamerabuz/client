import { Component ,OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeTypeEnum } from 'src/app/models/app-interfaces';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  constructor(
    private router : Router,
    private appService: AppService
    ){}
  public employeeType : any = EmployeeTypeEnum ;
  @Input() employee : any;
  ngOnInit(): void {
  }

  navigateToEmployeeDetails() : void {
    this.appService.updateCurentEmployee(this.employee)
    this.router.navigate(['employeeDetails'])
  }
}

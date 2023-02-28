import { Component ,OnInit, Input} from '@angular/core';
import { Employee, EmployeeTypeEnum } from 'src/app/models/app-interfaces';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.scss']
})
export class SubordinatesComponent implements OnInit{
  public subordinates :Array<Employee> = [];
  constructor(private appService : AppService){}
  ngOnInit(): void {
    console.log(this.subordinates)
    this.subordinates = this.appService.getSubordinatesById()
  }
}

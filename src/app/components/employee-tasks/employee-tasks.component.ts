import { Component ,OnInit} from '@angular/core';
import { Task } from 'src/app/models/app-interfaces';
import { AppService } from 'src/app/services/app.service';
import {Observable} from 'rxjs'
@Component({
  selector: 'app-employee-tasks',
  templateUrl: './employee-tasks.component.html',
  styleUrls: ['./employee-tasks.component.scss']
})
export class EmployeeTasksComponent implements OnInit {
  tasks$! : Observable<Task[]>;

  constructor(private appService : AppService){}
  ngOnInit(): void {
    this.tasks$ = this.appService.getTasks()
  }

}

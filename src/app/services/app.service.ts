import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, Report, Task } from '../models/app-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  readonly apiServerUrl = 'https://localhost:7088/api';
  public curentEmployee: Employee = {
    id: -1,
    first: '',
    last: '',
    position: 0,
    managerId: 0,
  };
  private employyees: Employee[] = [];
  private employyees$!: Observable<Employee[]>;
  private Tasks: Task[] = [];
  private Tasks$!: Observable<Task[]>;
  constructor(private http: HttpClient) {}

  updateCurentEmployee(employee: Employee): void {
    this.curentEmployee = employee;
  }
  getEmployeesList(): Observable<Employee[]> {
    this.employyees$ = this.http.get<Employee[]>(
      this.apiServerUrl + '/Employees'
    );
    this.employyees$.subscribe((data: Employee[]) => {
      this.employyees = data
    })
    return this.employyees$;
  }

  getTasks() : Observable<Task[]> {
    this.Tasks$ = this.http.get<Task[]>(
      this.apiServerUrl + '/Tasks/employeeId/'+this.curentEmployee.id
    );
    this.Tasks$.subscribe((data :Task[])=>{
      this.Tasks = data
    })
    return this.Tasks$;
  }

  getSubordinatesById() : Employee[] {
      const mySubordinates = this.employyees.filter(employee => employee.managerId === this.curentEmployee.id)
      return mySubordinates.length > 0? mySubordinates : [] as Employee[];
  }

  addNewTask(task : Task) : Observable<Task>{
    return this.http.post<Task>(this.apiServerUrl + '/Tasks',task);
  }

  addNewReport(report : Report) : Observable<Report>{
    return this.http.post<Report>(this.apiServerUrl + '/Reports',report);
  }

  getManagerById(id: number): Employee {
    console.log('----------- getManagerById function start---------------');
    if (id !== -1) {

      const manager = this.employyees.filter(employee => employee.id === id)
      if(manager[0]){
        return manager[0];
      }else{
        return {
          id: -1,
          first: 'Master',
          last: '',
          position: 0,
          managerId: 0,
        };
      }
    } else {
      return {
        id: -1,
        first: 'Master',
        last: '',
        position: 0,
        managerId: 0,
      };
    }
  }
}

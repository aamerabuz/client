export interface Employee {
  id: number;
  first: string;
  last: string;
  position: EmployeeTypeEnum;
  managerId: number;
}

export interface EmployeeType {
  Id: number;
  EmployeeTypeName: string;
}

export interface Report {
  id: number;
  text: string;
  timeStamp: Date;
  employeeId: number;
  employee: Employee;
}

export interface Task {
  id: number;
  text: string;
  dueDate: Date;
  timeStamp: Date;
  employeeId: number;
  employee: Employee;
}


export enum EmployeeTypeEnum{
    Manager = 1,
    Employee = 2
}
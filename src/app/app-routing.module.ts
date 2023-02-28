import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsViewComponent } from './views/employee-details-view/employee-details-view.component';
import { EmployeeListViewComponent } from './views/employee-list-view/employee-list-view.component';

const routes: Routes = [
  {
    path:'employeeList',
    component:EmployeeListViewComponent
  },
  {
    path:'employeeDetails',
    component:EmployeeDetailsViewComponent
  },
  {
    path:'',
    redirectTo:'/employeeList',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

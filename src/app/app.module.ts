import {HttpClientModule} from '@angular/common/http'
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListViewComponent } from './views/employee-list-view/employee-list-view.component';
import { EmployeeDetailsViewComponent } from './views/employee-details-view/employee-details-view.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { ComponentTitleComponent } from './components/component-title/component-title.component';
import { EmployeeDetailsSectionComponent } from './components/employee-details-section/employee-details-section.component';
import { EmployeeTasksComponent } from './components/employee-tasks/employee-tasks.component';
import { EmployeeSubordinatesComponent } from './components/employee-subordinates/employee-subordinates.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubordinatesComponent } from './components/subordinates/subordinates.component';
import { SubordinateItemComponent } from './components/subordinate-item/subordinate-item.component';
import { ReportFormComponent } from './components/report-form/report-form.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListViewComponent,
    EmployeeDetailsViewComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    ComponentTitleComponent,
    EmployeeDetailsSectionComponent,
    EmployeeTasksComponent,
    EmployeeSubordinatesComponent,
    TaskItemComponent,
    SubordinatesComponent,
    SubordinateItemComponent,
    ReportFormComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { Report } from 'src/app/models/app-interfaces';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss'],
})
export class ReportFormComponent implements OnInit {
  @ViewChild('f') form: any;
  @Input() employeeManager : any;
  constructor( private appService :  AppService) {}
  ngOnInit(): void {
  }
  createNewReport(): void {
    if (this.form.valid) {

      var closeModalButton = document.getElementById('report-close-button');
      console.log(this.form.controls.name.controls.reportText)
      let report : Report = {
        text : this.form.controls.name?.controls.reportText?.value,
        timeStamp: new Date(),
        employeeId: this.employeeManager.id
      } as Report;
      this.appService.addNewReport(report).subscribe((data : Report) => {
        console.log(data)
      })
      if (closeModalButton) {
        closeModalButton.click();
      }
    } else {
      alert('Report Text Is Required');
    }
  }
}

import { Component,OnInit ,ViewChild,Input } from '@angular/core';
import { Task } from 'src/app/models/app-interfaces';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit{
  @ViewChild('f') form : any;
  @Input() subordinate : any;
  constructor(private appService : AppService) {}
  ngOnInit(): void {
  }
  assignTaskHandle() : void {
    if(this.form.valid){
      var closeModalButton = document.getElementById('task-close-button');
      console.log(this.form.controls.name?.controls.taskTitle?.value)
      let task : Task = {
        text:this.form.controls.name?.controls.taskTitle?.value,
        dueDate: this.form.controls.name?.controls.taskDueDate?.value,
        timeStamp:new Date(),
        employeeId:this.subordinate.id
      } as Task
      this.appService.addNewTask(task).subscribe((data : Task) => {
        console.log(data)
      })
      if(closeModalButton){
        closeModalButton.click()
      }
    }else{
      alert('All Fields Required')
    }
  }
}

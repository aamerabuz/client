import { Component,OnInit , Input } from '@angular/core';
import { EmployeeTypeEnum } from 'src/app/models/app-interfaces';

@Component({
  selector: 'app-subordinate-item',
  templateUrl: './subordinate-item.component.html',
  styleUrls: ['./subordinate-item.component.scss']
})
export class SubordinateItemComponent implements OnInit{
  @Input() subordinate : any ;
  public EmployeeType = EmployeeTypeEnum
  constructor() {}
  ngOnInit(): void {
  }

  
}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Employee } from 'src/app/models/app-interfaces';
@Component({
  selector: 'app-component-title',
  templateUrl: './component-title.component.html',
  styleUrls: ['./component-title.component.scss']
})
export class ComponentTitleComponent implements OnInit {
  

  constructor(
    private router : Router
    ){}
  @Input() title:string = '';
  @Input() showHomeIcon : boolean = false;
  arrowLeft = faArrowLeft;




  ngOnInit() : void {
    
  }

  navigateToHome() : void {
    this.router.navigate(['/'])
  }
}

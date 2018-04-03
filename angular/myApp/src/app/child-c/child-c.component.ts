import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css']
})
export class ChildCComponent implements OnInit {
  isActive = true;
   details;
   title = "my title";
   email = "tenuki@y.com";

   onSave($event){
     console.log(`button was clicked`);
   }

    onkeyup(){
      console.log(this.email);
             
    
   }
  constructor(service: ServiceService) { 
    this.details = service.getDetails();
  }

  ngOnInit() {
  }

}

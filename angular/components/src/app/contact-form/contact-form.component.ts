import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{
 data = [
  {
    id : "1",
    name : "param"
  },
  {
    id : "2",
    name : "Jango"
  }
];
  log(val){
    console.log(val);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'formarray',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

  constructor() { }
form = new FormGroup({
  topicArray : new FormArray([])
})
  addTopic(topic : HTMLInputElement){
    (this.topics.push(new FormControl(topic.value)))
    topic.value = '';

  }
  get topics(){
    return this.form.get('topicArray') as FormArray
  }
  topicRemove(topic : FormControl){
    
    let index   = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);

  }

}
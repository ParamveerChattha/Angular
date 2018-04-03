import { Component } from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', Validators.required)
  });
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
onClick(){
  console.log(`value of username is ${this.form.value.username}`);
  console.log(`value of password is ${this.form.value.password}`);
  console.log(this.form);
}
}

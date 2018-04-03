import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildCComponent } from './child-c/child-c.component';
import { ServiceService } from './service.service';
import { SignupFormComponent } from './signup-form/signup-form.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildCComponent,
    SignupFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
   ],
   exports:[
    ReactiveFormsModule,
   ],
  providers: [
    ServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

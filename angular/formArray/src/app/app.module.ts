import { PostService } from './services/post.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule}from '@angular/forms'
import {HttpModule} from '@angular/http'


import { AppComponent } from './app.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { HttprequestsComponent } from './httprequests/httprequests.component';



@NgModule({
  declarations: [
    AppComponent,
    FormArrayComponent,
    HttprequestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

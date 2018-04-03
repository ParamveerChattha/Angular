import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  
    getDetails(){
      return ["one","two","three","four"];
    }
  
  constructor() { }

}

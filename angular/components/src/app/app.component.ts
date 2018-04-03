import { FavouriteEventArgs } from './favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFavourite : boolean;
  //below method's variable will an input to the other class property.
  rootApp(){
    this.isFavourite = false;
  }
   /*I am checking the data type of the input received, by creating an interface instead inline chekcing
   Method will be called when the favoruite will change, ie is OUTPUT Property Binding(not exactly).
   ie, it takes in the output of its child and uses it here
    */
  isFavouriteChange(someData : FavouriteEventArgs){
    console.log("triggered when favourite was changed and is favourite is ", someData);
  }
  
}

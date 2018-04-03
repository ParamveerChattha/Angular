import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  //given the alias to the Input ,which is used in app-component.ts
  @Input('isFav') isFavourite : boolean = true;
  //when passing a value to parent, it passes as an event, ie. her eon change.
  //change is th event being binded in the app comoponet.html , and on this event the parent method whill trigger, which will
  // take in the event and by event, we will emit the values
  @Output('change') click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  //called by button, as fav icons are not avaialble in bootsrap 4.
  onClick(){
    this.isFavourite = !this.isFavourite;
    //change will emit an event, which will be fetched where it is being binded ie in the app-compoennt.ts
    this.click.emit({newState: this.isFavourite});
  }
}
//interface created which is used in app component.
export interface FavouriteEventArgs{
  newState : boolean;
}

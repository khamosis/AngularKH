import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.css']
})
export class FavoritComponent implements OnInit {

 @Input('is-favorite') isSelected: boolean=false;
 @Output() change =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  myfavorite(){
    this.isSelected= !this.isSelected;
    this.change.emit({newState : this.isSelected});
  }

}

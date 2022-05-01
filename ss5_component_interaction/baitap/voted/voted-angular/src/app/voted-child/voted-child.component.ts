import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRatingUnit} from "../IRatingUnit";
import {RatingUnitDao} from "../RatingUnitDao";

@Component({
  selector: 'app-voted-child',
  templateUrl: './voted-child.component.html',
  styleUrls: ['./voted-child.component.css']
})
export class VotedChildComponent implements OnInit {
  rating:IRatingUnit[] = RatingUnitDao.rating;
  constructor() { }
  @Output("rating") value = new EventEmitter<number>();
  ngOnInit(): void {
  }
  sendData(value: number) {
  this.value.emit(value);
    for (let i:number = 0;i<value;i++){
      this.rating[i].active = 1;
    }
    for (let i:number=value;i<10;i++){
      this.rating[i].active = 0;
    }
  }
}


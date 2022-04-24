import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  number1:number=0;
  number2:number=0;
  result:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    this.result = (this.number1 + this.number2);
  }

  sub() {
    this.result = this.number1-this.number2;
  }

  div() {
    this.result = this.number1/this.number2;
  }

  multi() {
    this.result = this.number1*this.number2;
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStudent} from "../student/IStudent";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  student:IStudent | undefined;
  @Output() studentCreate = new EventEmitter<IStudent>();
  constructor() { }

  ngOnInit(): void {
  }

  getData(value: string, value2: string, s: string, value3: string, value4: string) {
    this.student = {
      id : parseInt(value),
      name : value2,
      gender : parseInt(s),
      mark : parseInt(value3),
      address : value4
    }
    this.studentCreate.emit(this.student);
    console.log(this.student);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from "../student/IStudent";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input('student-detail') student:IStudent | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {IStudent} from "./IStudent";
import {StudentDao} from "../modelDao/StudentDao";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}

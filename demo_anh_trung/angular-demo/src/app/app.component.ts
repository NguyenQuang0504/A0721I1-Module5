import { Component } from '@angular/core';
import {IStudent} from "./student/IStudent";
import {StudentDao} from "./modelDao/StudentDao";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student:IStudent[] = StudentDao.students;
  student1:IStudent | undefined;
  title = 'angular-demo';

  getStudent(item:IStudent) {
    this.student1 = item;
  }
}

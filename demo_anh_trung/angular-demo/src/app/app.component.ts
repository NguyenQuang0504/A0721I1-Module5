import { Component } from '@angular/core';
import {IStudent} from "./student/IStudent";
import {StudentDao} from "./modelDao/StudentDao";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student: IStudent[] = StudentDao.students;
  student1:IStudent | undefined;
  studentUpdate:IStudent;
  title = 'angular-demo';

  getStudent(item:IStudent) {
    this.student1 = item;
  }

  showData(value1: IStudent) {
    console.log(value1)
    let check:boolean = true;
    for (let i:number = 0;i<this.student.length;i++){
      if (this.student[i].id===value1.id){
        check = false;
        this.student[i] = value1;
        break;
      }
    }
    if (check) {
      this.student.unshift(value1);
    }
  }

  updateStudent(item: IStudent) {
    this.studentUpdate = item;
  }
}

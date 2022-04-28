import { Component } from '@angular/core';
import {IStudent} from "./student/IStudent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student: IStudent[] = [
    {
      id: 1,
      name: "Nguyen Van Quang",
      gender: 1,
      mark: 80,
      address: "Hue"
    },
    {
      id: 2,
      name: "Nguyen Van Tuan",
      gender: 1,
      mark: 30,
      address: "Da Nang"
    },
    {
      id: 3,
      name: "Duong Thi Thuy",
      gender: 0,
      mark: 100,
      address: "TP Ho Chi Minh"
    },
    {
      id: 5,
      name: "Nguyen Van Anh",
      gender: 2,
      mark: 20,
      address: "Quang Nam"
    }
  ]
  student1:IStudent | undefined;
  title = 'angular-demo';

  getStudent(item:IStudent) {
    this.student1 = item;
  }

  showData(value1: IStudent) {
    this.student.unshift(value1)
  }
}

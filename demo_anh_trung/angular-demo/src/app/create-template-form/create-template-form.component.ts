import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {StudentDao} from "../modelDao/StudentDao";
import {IStudent} from "../student/IStudent";

@Component({
  selector: 'app-create-template-form',
  templateUrl: './create-template-form.component.html',
  styleUrls: ['./create-template-form.component.css']
})
export class CreateTemplateFormComponent implements OnInit {
  @Input('update') studentUpdate1: IStudent;

  constructor() {
  }

  ngOnInit(): void {
  }

  save(formTemplate: NgForm) {
    let check: boolean = true;
    for (let i: number = 0; i < StudentDao.students.length; i++) {
      if (StudentDao.students[i].id === formTemplate.value.id) {
        StudentDao.students[i] = formTemplate.value;
        check = false;
        break
      }
    }
    if (check) {
      StudentDao.students.push(formTemplate.value);
    }
  }
}

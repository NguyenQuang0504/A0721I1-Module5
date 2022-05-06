import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {StudentDao} from "../modelDao/StudentDao";
import {IStudent} from "../student/IStudent";

@Component({
  selector: 'app-create-reactive-form',
  templateUrl:'./create-reactive-form.component.html',
  styleUrls: ['./create-reactive-form.component.css']
})
export class CreateReactiveFormComponent implements OnInit {
  @Input('update') updateStudent:IStudent;
  constructor() { }
  reactive: FormGroup;
  ngOnInit(): void {
    this.reactive = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      gender: new FormControl('', [Validators.required]),
      mark:new FormControl('', [Validators.required, Validators.min(0)]),
      address: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  save() {
    let check: boolean = true;
    for (let i: number = 0; i < StudentDao.students.length; i++) {
      if (StudentDao.students[i].id === this.reactive.value.id) {
        StudentDao.students[i] =this.reactive.value;
        check = false;
        break
      }
    }
    if (check) {
      StudentDao.students.push(this.reactive.value);
    }
    this.reactive.reset();
  }
}

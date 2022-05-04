import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Users} from "../Users";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  user: FormGroup;


  ngOnInit(): void {
    this.user = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]),
      pws: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirm: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, this.comparePassword),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^\\+84\\d{9,10}$")])
    });

  }
   comparePassword( c : AbstractControl) {
    const v = c.value;
    return (v.password === v.confirm) ?
      null : {
      passwordnotmatch: true
    } ;
  }

  saveData() {
    Users.user.push(this.user.value);
    this.user.reset();
  }
}

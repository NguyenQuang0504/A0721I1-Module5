import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  constructor() { }
  formLogin:FormGroup;
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)])
    });
    this.formLogin.reset();
  }

  login() {
    this.user = this.formLogin.value;
    console.log(this.user);
  }
}

import { Component } from '@angular/core';
import {Users} from "./Users";
import {IUsers} from "./IUsers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-register';
  users:IUsers[] = Users.user;
}

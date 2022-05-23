import { Component, OnInit } from '@angular/core';
import {HomeServiceService} from "./home-service.service";
import {ICustomer} from "../model/ICustomer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customers:ICustomer[];
  constructor(
    private service:HomeServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
   this.service.getAll().subscribe(
      data => {
        this.customers = data;
        console.log(this.customers);
      },
     error => {
        console.log("errors")
     }
    );
  }

  delete(id: number) {
    this.service.delete(id).subscribe(()=> {
      console.log("delete success");
      this.ngOnInit();
    }, error => {
      console.log("errors");
    });
  }
}

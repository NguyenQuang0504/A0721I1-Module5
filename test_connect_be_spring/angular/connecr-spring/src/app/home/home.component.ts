/* tslint:disable */
import {Component, OnInit} from '@angular/core';
import {HomeServiceService} from "../home-service.service";
import {ICustomer} from "../model/ICustomer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customers: ICustomer[];
  page = 0;
  count=0;
  size = 2;
  constructor(
    private service: HomeServiceService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.service.getAll(this.page, this.size).subscribe(
      data => {
        this.customers = data;
        console.log(this.customers);
      },
      error => {
        console.log("errors");
      }
    );
    this.check();
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => {
      console.log('delete success');
      this.page = 0;
      this.ngOnInit();
    }, error => {
      console.log('errors');
    });
  }
  check(){
    this.service.getAllList().subscribe(data => {
      this.count = data.length;
    });
    if (this.page == 0){
      document.getElementById('back').hidden = true;
      document.getElementById('next').hidden = false;
    }
    else if (this.page == (Math.round(this.count/this.size))-1){
      document.getElementById('next').hidden = true;
      document.getElementById('back').hidden = false;
    }
    else {
      document.getElementById('next').hidden = false;
      document.getElementById('back').hidden = false;
    }
  }
  back() {
      this.page = this.page - 1;
      this.ngOnInit();
  }

  next() {
      this.page = this.page + 1;
      this.ngOnInit();
  }

  search(value1: string, value2: string) {
    console.log(value1, value2);
    if (value1 == ''){
      alert("Ban chua nhap tu khoa tim kiem");
    }
    else {
      this.service.search(value1, value2).subscribe(data => {
        this.customers = data;
      })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {IProduct} from "../IProduct";
import {ProductServiceService} from "../service/product-service.service";
import {Subscription} from "rxjs";
import {ICategory} from "../ICategory";
import {CategoryServiceService} from "../service/category-service.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  page:number = 1;
  private subscription: Subscription|undefined;
  products:IProduct[];
  category:ICategory;
  constructor(
    private _service : ProductServiceService,
    private _serviceCategory:CategoryServiceService
  ) { }

  ngOnInit(): void {
    this.subscription = this._service.getAll(this.page).subscribe(data=>{
      this.products = data;
      console.log(data);
    }, error => {
      console.log("ERRORS");
    });
  }

  back() {
    if (this.page>1){
      this.page = this.page -1;
      this.ngOnInit();
    }
  }

  next() {
    this.page = this.page +1 ;
    this.ngOnInit();
  }

  searchAll(value: string, value1:string) {
    this._service.search(value, value1).subscribe(data => {
      this.products = data;
      console.log(this.products);
      console.log(value, value1);
    })
  }

  // sort() {
  //   this._service.sort().subscribe(data => {
  //     this.products = data;
  //   })
  // }
}

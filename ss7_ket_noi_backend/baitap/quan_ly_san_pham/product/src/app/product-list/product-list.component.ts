import { Component, OnInit } from '@angular/core';
import {IProduct} from "../IProduct";
import {ProductServiceService} from "../service/product-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private subscription: Subscription|undefined;
  products:IProduct[];
  constructor(
    private _service : ProductServiceService
  ) { }

  ngOnInit(): void {
    this.subscription = this._service.getAll().subscribe(data=>{
      this.products = data;
      console.log(data);
    }, error => {
      console.log("ERRORS");
    });
  }

}

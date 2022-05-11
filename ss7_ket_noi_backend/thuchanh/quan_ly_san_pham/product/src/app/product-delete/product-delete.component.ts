import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductServiceService} from "../service/product-service.service";
import {IProduct} from "../IProduct";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  private subscription: Subscription;
  productDelete:IProduct;
  constructor(
    private _router:Router,
    private _activated:ActivatedRoute,
    private _service:ProductServiceService
  ) { }

  ngOnInit(): void {
    let id = this._activated.snapshot.params['id'];
    this._service.findById(id).subscribe(data=>{
      this.productDelete = data;
    }, error => {
      console.log("errors");
    });
  }

  close() {
    this._router.navigateByUrl('product');
  }

  delete() {
    this._service.delete(this.productDelete.id).subscribe(()=>{
      alert("Da xoa "+this.productDelete.name);
      this._router.navigateByUrl('product');
    }, error => {
      console.log("errors")
    });
  }
}

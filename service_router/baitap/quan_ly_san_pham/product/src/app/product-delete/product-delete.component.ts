import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductServiceService} from "../service/product-service.service";
import {IProduct} from "../IProduct";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productDelete:IProduct;
  constructor(
    private _router:Router,
    private _activated:ActivatedRoute,
    private _service:ProductServiceService
  ) { }

  ngOnInit(): void {
    let id = this._activated.snapshot.params['id'];
    this.productDelete = this._service.findById(id);
  }

  close() {
    this._router.navigateByUrl('product');
  }

  delete() {
    this._service.delete(this.productDelete.id);
    this._router.navigateByUrl('product')
    alert("Da xoa "+this.productDelete.name);
  }
}

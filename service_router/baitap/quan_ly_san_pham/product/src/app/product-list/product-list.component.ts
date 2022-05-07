import { Component, OnInit } from '@angular/core';
import {IProduct} from "../IProduct";
import {ProductServiceService} from "../service/product-service.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listProduct:IProduct[] = this._service.getAll();
  constructor(
    private _service : ProductServiceService
  ) { }

  ngOnInit(): void {
  }

}

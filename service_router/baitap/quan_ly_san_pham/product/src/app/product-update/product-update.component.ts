import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {IProduct} from "../IProduct";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: IProduct;
  product1:FormGroup;
  constructor(
    private _service:ProductServiceService,
    private _activated: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this._activated.snapshot.params['id'];
    this.product = this._service.findById(id);
    this.product1 = new FormGroup(
      {
        id: new FormControl('',[Validators.required]),
        name: new FormControl('',[Validators.required]),
        price: new FormControl('',[Validators.required, Validators.min(0)] ),
        description: new FormControl('', [Validators.required])
      }
    )
  }

  save() {
    this._service.update(this.product1.value);
  }
}

import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {IProduct} from "../IProduct";
import {ActivatedRoute, Router} from "@angular/router";
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
    private _activated: ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    let id = this._activated.snapshot.params['id'];
    this.product = this._service.findById(id);
    console.log(this.product);
    this.product1 = new FormGroup(
      {
        id: new FormControl('',[Validators.required]),
        name: new FormControl('',[Validators.required]),
        price: new FormControl('',[Validators.required, Validators.min(0)] ),
        description: new FormControl('', [Validators.required])
      }
    )
    this.product1.setValue(this.product);
  }

  save() {
    this._service.update(this.product1.value);
    this._router.navigateByUrl('/product');
  }
}

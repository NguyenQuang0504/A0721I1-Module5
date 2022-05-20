import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {IProduct} from "../IProduct";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {CategoryServiceService} from "../service/category-service.service";
import {ICategory} from "../ICategory";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  private subscription: Subscription |undefined;
  product: IProduct;
  product1:FormGroup;
  category:ICategory[] = [];
  productUpdate: IProduct;
  constructor(
    private _service:ProductServiceService,
    private _activated: ActivatedRoute,
    private _router:Router,
    private _serviceCategory:CategoryServiceService
  ) { }

  ngOnInit(): void {
    let id = this._activated.snapshot.params['id'];

    this.subscription = this._service.findById(id).subscribe(data =>{
      this.product = data;
    },error => {
      console.log("errors");
      }
      );

    this.subscription = this._serviceCategory.getAll().subscribe(data=>{
      this.category = data;
    }, error => {
      console.log("errors");
    })

    this.product1 = new FormGroup(
      {
        id: new FormControl('',[Validators.required]),
        name: new FormControl('',[Validators.required]),
        price: new FormControl('',[Validators.required, Validators.min(0)] ),
        description: new FormControl('', [Validators.required]),
        category: new FormControl('')
      }
    )
  }

  update() {
    this._service.update(this.product1.value.id, this.product1.value).subscribe(() => {
      console.log('success');
      this._router.navigateByUrl('/product');
    })
    // this.productUpdate = this.product1.value;
    // this._serviceCategory.getCategoryByID(this.product1.value.category).subscribe(data => {
    //   this.productUpdate.category = data;
    //   console.log(this.productUpdate.category);
    //   console.log(this.productUpdate);
    // });
    //
    // this._service.update(this.product1.value.id, this.productUpdate).subscribe(() => {
    //     this._router.navigateByUrl('/product');
    //   },
    //   error => {console.log("errors");}
    //   );
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductServiceService} from "../service/product-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product:FormGroup;
  constructor(
    private _service: ProductServiceService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.product = new FormGroup(
      {
        id: new FormControl('',[Validators.required]),
        name: new FormControl('',[Validators.required]),
        price: new FormControl('',[Validators.required, Validators.min(0)] ),
        description: new FormControl('', [Validators.required])
      }
    )
  }

  save() {
    this._service.add(this.product.value);
    this._router.navigateByUrl('/product');
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductServiceService} from "../service/product-service.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {CategoryServiceService} from "../service/category-service.service";
import {ICategory} from "../ICategory";
import {IProduct} from "../IProduct";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  private subscription: Subscription;
  product: FormGroup;
  category: ICategory[] = [];
  productCreate: IProduct;

  constructor(
    private _service: ProductServiceService,
    private _router: Router,
    private _serviceCategory: CategoryServiceService
  ) {
  }

  ngOnInit(): void {
    this._serviceCategory.getAll().subscribe(data => {
      this.category = data;
      console.log(this.category[0]);
    }, error => {
      console.log("errors");
    })
    this.product = new FormGroup(
      {
        id: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required, Validators.min(0)]),
        description: new FormControl('', [Validators.required]),
        category: new FormControl('')
      }
    )
  }
// ^([0-9]{10}|[0-9]{12})$ sdt
  save() {
    this._service.save(this.product.value).subscribe( () => {
      console.log("success");
      this._router.navigateByUrl('/product');
    })
  }
}

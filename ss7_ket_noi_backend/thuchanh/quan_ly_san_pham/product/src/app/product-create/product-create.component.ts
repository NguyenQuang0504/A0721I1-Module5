import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductServiceService} from "../service/product-service.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {CategoryServiceService} from "../service/category-service.service";
import {ICategory} from "../ICategory";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  private subscription: Subscription;
  product: FormGroup;
  category: ICategory[] = [];

  constructor(
    private _service: ProductServiceService,
    private _router: Router,
    private _serviceCategory: CategoryServiceService
  ) {
  }

  ngOnInit(): void {
    this._serviceCategory.getAll().subscribe(data => {
      this.category = data;
      console.log(data);
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

  save() {
    this._service.save(this.product.value).subscribe(() => {
        this._router.navigateByUrl('/product');
      },
      error => {
        console.log("errors");
      },
    );
  }
}

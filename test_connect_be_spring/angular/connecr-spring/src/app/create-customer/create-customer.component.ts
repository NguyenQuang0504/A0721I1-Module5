import {HomeServiceService} from "../home-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICustomer} from "../model/ICustomer";
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {CustomName} from "../validate/CustomName";
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: FormGroup;
  customerCreate: ICustomer;
  image:any;
  constructor(
    private service: HomeServiceService,
    private route: Router,
  ) {
  }

  ngOnInit(): void {
    this.customer = new FormGroup(
      {
        id: new FormControl(),
        firstName: new FormControl('', [Validators.required, CustomName]),
        lastName: new FormControl('', [Validators.required]),
        urlImage: new FormControl('')
      }
    );
  }

  submitCustomer() {
    this.customerCreate = this.customer.value;
    console.log(this.customerCreate);
          this.service.createCustomer(this.customerCreate).subscribe(() => {
            console.log("create success");
            this.route.navigateByUrl('');
          }, error => {
            console.log("errors");
          });
  }

  getImage(event1: any) {
    this.image = event1.target.files[0];
    console.log(this.image);
  }
}

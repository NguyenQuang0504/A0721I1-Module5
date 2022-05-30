import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HomeServiceService} from "../home-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICustomer} from "../model/ICustomer";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer: ICustomer;
  constructor(
    private activatedRoute:ActivatedRoute,
    private service: HomeServiceService,
    private route:Router
  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.customerForm = new FormGroup(
      {id: new FormControl(''),
                firstName: new FormControl('', [Validators.required]),
                lastName: new FormControl('', [Validators.required]),
                urlImage: new FormControl('')}
    )

    this.service.getById(id).subscribe(data => {
      this.customer = data;
      this.customerForm.patchValue(this.customer);
    })
  }

  submitCustomer() {
    console.log(this.customerForm.value);
    this.service.update(this.customerForm.value.id, this.customerForm.value).subscribe(()=>{
      console.log("success");
      this.route.navigateByUrl('');
    })
  }
}

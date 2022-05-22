import { Component, OnInit } from '@angular/core';
import {HomeServiceService} from "../home/home-service.service";
import {ICustomer} from "../model/ICustomer";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {
  customer:ICustomer;
  constructor(
    private service:HomeServiceService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
   let id:number = this.activatedRoute.snapshot.params['id'];
   this.service.getById(id).subscribe(data =>
   {this.customer = data},
     error => {
     console.log("errors");
     }
   )
  }

}

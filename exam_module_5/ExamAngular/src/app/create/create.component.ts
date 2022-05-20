import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {IModel} from "../IModel";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model:FormGroup;
  private subscription:Subscription;
  constructor( private httpClient:HttpClient,
               private router: Router,
               private service:ServiceService) { }

  ngOnInit(): void {
    this.model = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('',[Validators.required, Validators.pattern('^(09[0-9]{10}|[+]84[0-9]{10})$')])
      },);
  }
// Validators.pattern('^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$')] email
  // Validators.pattern("^\\+84\\d{9,10}$") phone
//^(09[0-9]{10}|[+]84[0-9]{10})$ phone
//^XXX[a-z]{4}$ regex XXXawqs
  save() {
    this.service.create(this.model.value).subscribe(()=>{
      alert("Ban da tao moi thanh cong");
      this.router.navigateByUrl('');
    })
  }
}

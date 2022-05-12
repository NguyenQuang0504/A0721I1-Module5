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
        name: new FormControl('',[Validators.required])
      },);
  }

  save() {
    this.service.create(this.model.value).subscribe(()=>{
      alert("Ban da tao moi thanh cong");
      this.router.navigateByUrl('');
    })
  }
}

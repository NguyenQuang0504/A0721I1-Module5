import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../service/service.service";
import {IModel} from "../IModel";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  model:IModel;
  modelForm:FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _service:ServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getModel();
    this.modelForm = new FormGroup(
      {
        id : new FormControl(''),
        idBenhAn: new FormControl(),
        idBenhNhan: new FormControl(),
        tenBenhNhan: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]{1,100}$')]),
        ngayNhapVien: new FormControl('', [Validators.required]),
        ngayRaVien: new FormControl('', [Validators.required]),
        lyDo: new FormControl('', [Validators.required]),
        phuongPhap: new FormControl('', [Validators.required]),
        bacSy: new FormControl('', [Validators.required])
      }
    )
  }
  getModel(){
   let id = this.activatedRoute.snapshot.params['id'];
    this._service.findById(id).subscribe(data => {
      this.model = data;
      console.log(this.model);
    })
  };

  save() {
    this._service.update(this.modelForm.value).subscribe(() => {
      console.log("success");
      this.router.navigateByUrl('');
    })
  }

  return() {
    this.router.navigateByUrl('');
  }
}

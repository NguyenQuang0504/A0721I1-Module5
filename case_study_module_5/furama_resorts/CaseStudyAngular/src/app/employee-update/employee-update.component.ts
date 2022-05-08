import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceEmployeeService} from "../service/service-employee.service";
import {IEmployee} from "../model/IEmployee";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employee:IEmployee;
  employee1:FormGroup;
  constructor(
    private _service:ServiceEmployeeService,
    private _activated:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    let cccd = this._activated.snapshot.params['cccd'];
    this.employee = this._service.findByCCCD(cccd);
    this.employee1 = new FormGroup(
      {
        name: new FormControl(),
        date: new FormControl(),
        phone: new FormControl(),
        cccd:new FormControl(),
        email: new FormControl(),
        level: new FormControl(),
        position: new FormControl(),
        salary: new FormControl()
      }
    )
  }

  save() {
    this._service.update(this.employee1.value);
    this._router.navigateByUrl('/employee')
  }
}

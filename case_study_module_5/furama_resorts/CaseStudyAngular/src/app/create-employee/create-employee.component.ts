import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ServiceEmployeeService} from '../service/service-employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: FormGroup;

  constructor(
    private _service: ServiceEmployeeService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this.employee = new FormGroup(
      {
        name: new FormControl(''),
        date: new FormControl(''),
        phone: new FormControl(''),
        cccd: new FormControl(''),
        email: new FormControl(''),
        level: new FormControl(''),
        position: new FormControl(''),
        salary: new FormControl('')
      },
    );
  }

  save() {
    this._service.create(this.employee.value);
    alert('Ban da them moi nhan vien ' + this.employee.value.name);
    this._router.navigateByUrl('/employee');
  }
}

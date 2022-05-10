import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceEmployeeService} from '../service/service-employee.service';
import {IEmployee} from '../model/IEmployee';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employee: IEmployee;
  employee1: FormGroup;

  constructor(
    private service: ServiceEmployeeService,
    private activated: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const cccd = this.activated.snapshot.params.cccd;
    this.employee = this.service.findByCCCD(cccd);
    this.employee1 = new FormGroup(
      {
        name: new FormControl(''),
        date: new FormControl(''),
        phone: new FormControl(''),
        cccd: new FormControl(''),
        email: new FormControl(''),
        level: new FormControl(''),
        position: new FormControl(''),
        salary: new FormControl('')
      }
    );
  }

  save() {
    this.service.update(this.employee1.value);
    this.router.navigateByUrl('/employee');
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceEmployeeService} from '../service/service-employee.service';
import {IEmployee} from '../model/IEmployee';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IPositionEmployee} from '../model/IPositionEmployee';
import {ILevelEmployee} from '../model/ILevelEmployee';
import {PositionServerService} from '../service/position-server.service';
import {LevelSericeService} from '../service/level-serice.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employee: IEmployee;
  employee1: FormGroup;
  id: number;
  position: IPositionEmployee[];
  level: ILevelEmployee[];

  constructor(
    private service: ServiceEmployeeService,
    private activated: ActivatedRoute,
    private router: Router,
    private servicePosition: PositionServerService,
    private serviceLevel: LevelSericeService
  ) {
  }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params.id;
    this.service.findById(this.id).subscribe(
      data => {
        this.employee = data;
        console.log(this.employee);
      }
    );
    this.servicePosition.getAll().subscribe(data => {
      this.position = data;
    });
    this.serviceLevel.getAll().subscribe(data => {
      this.level = data;
    });
    this.employee1 = new FormGroup(
      {
        id: new FormControl(''),
        name: new FormControl('', [Validators.required, Validators.minLength(6)]),
        date: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
        cccd: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
        email: new FormControl('', [Validators.required, Validators.pattern('^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$')]),
        level: new FormControl(''),
        position: new FormControl(''),
        salary: new FormControl('', [Validators.min(0)])
      }
    );
  }

  save() {
    console.log(this.employee1.value);
    this.service.update(this.id, this.employee1.value).subscribe(
      data => {
        console.log('success');
        this.router.navigateByUrl('/employee');
      }
    );
  }
}

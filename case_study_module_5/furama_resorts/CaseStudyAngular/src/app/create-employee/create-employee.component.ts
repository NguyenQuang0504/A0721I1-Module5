import {Component, OnInit} from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import {ServiceEmployeeService} from '../service/service-employee.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {PositionServerService} from '../service/position-server.service';
import {IPositionEmployee} from '../model/IPositionEmployee';
import {LevelSericeService} from '../service/level-serice.service';
import {ILevelEmployee} from '../model/ILevelEmployee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: FormGroup;
  private subscription: Subscription;
   position: IPositionEmployee[];
   level: ILevelEmployee[];

  constructor(
    private _service: ServiceEmployeeService,
    private _router: Router,
    private _servicePosition: PositionServerService,
    private _serverLevel: LevelSericeService
  ) {
  }

  ngOnInit(): void {
    this._servicePosition.getAll().subscribe(data => {
      this.position = data;
    });
    this._serverLevel.getAll().subscribe(data => {
      this.level = data;
      console.log(this.level);
    }, error => {
      console.log('error');
    });
    this.employee = new FormGroup(
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
      },
    );
  }

  save() {
    this._service.create(this.employee.value).subscribe(data => {
      console.log(data);
      alert('Ban da them moi nhan vien ' + this.employee.value.name);
      this._router.navigateByUrl('/employee');
    }, error => {
      console.log('errors');
    });

  }
}

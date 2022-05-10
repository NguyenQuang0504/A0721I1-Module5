import {Injectable} from '@angular/core';
import {IEmployee} from '../model/IEmployee';


@Injectable({
  providedIn: 'root'
})
export class ServiceEmployeeService {
  employee: IEmployee[] = [
    {
      name: 'Nguyen Van Quang',
      date: '05/04/2000',
      phone: '0397111634',
      cccd: '164200000325',
      email: 'quang10a30504@gmail.com',
      level: 'Tien sy',
      position: 'Giam doc',
      salary: 1000
    },
    {
      name: 'Nguyen Van Quang 2',
      date: '05/04/2000',
      phone: '0397111634',
      cccd: '16421111111',
      email: 'quang10a30504@gmail.com',
      level: 'Tien sy',
      position: 'Giam doc',
      salary: 1000
    },
    {
      name: 'Nguyen Van Quang 3',
      date: '05/04/2000',
      phone: '0397111634',
      cccd: '16423333333',
      email: 'quang10a30504@gmail.com',
      level: 'Tien sy',
      position: 'Giam doc',
      salary: 1000
    }
  ];

  constructor() {
  }

  findAll() {
    return this.employee;
  }

  findByCCCD(cccd: string) {
    for ( let i = 0; i < this.employee.length; i++) {
      if (this.employee[i].cccd === cccd) {
        return this.employee[i];
      }
    }
    return undefined;
  }

  update(employee1: IEmployee) {
    for (let i = 0; i < this.employee.length; i++) {
      if (this.employee[i].cccd === employee1.cccd) {
        this.employee[i] = employee1;
      }
    }
  }

  create(employee: IEmployee) {
    this.employee.push(employee);
  }
}

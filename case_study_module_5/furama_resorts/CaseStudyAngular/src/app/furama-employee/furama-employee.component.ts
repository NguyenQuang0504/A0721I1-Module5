import {Component, OnInit} from '@angular/core';
import {IEmployee} from '../model/IEmployee';
import {ServiceEmployeeService} from '../service/service-employee.service';

@Component({
  selector: 'app-furama-employee',
  templateUrl: './furama-employee.component.html',
  styleUrls: ['./furama-employee.component.css']
})
export class FuramaEmployeeComponent implements OnInit {
  employee: IEmployee[] = this.service.findAll();

  constructor(
    private service: ServiceEmployeeService
  ) {
  }

  ngOnInit(): void {
  }

  delete(cccd: string) {
    for (let i = 0; i < this.employee.length; i++) {
      if (this.employee[i].cccd === cccd) {
        const check = confirm('Ban muon xoa' + this.employee[i].name + '?');
        if (check) {
          for (let j = i; j < this.employee.length; j++) {
            this.employee[j] = this.employee[j + 1];
          }
          this.employee.pop();
        } else {
          break;
        }
      }
    }
  }
}

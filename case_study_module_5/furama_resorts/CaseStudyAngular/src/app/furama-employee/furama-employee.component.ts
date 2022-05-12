import {Component, OnInit} from '@angular/core';
import {IEmployee} from '../model/IEmployee';
import {ServiceEmployeeService} from '../service/service-employee.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-furama-employee',
  templateUrl: './furama-employee.component.html',
  styleUrls: ['./furama-employee.component.css']
})
export class FuramaEmployeeComponent implements OnInit {
  private subscription: Subscription;
  employee: IEmployee[];

  constructor(
    // tslint:disable-next-line:variable-name
    private _router: Router,
    private service: ServiceEmployeeService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.service.findAll().subscribe(data => {
      this.employee = data;
    }, error => {
      console.log('error');
    });
  }

  delete(id: number) {
    let check = true;
    check = confirm('Ban co muon xoa');
    if (check) {
      this.service.delete(id).subscribe(() => {
        console.log('success');
        this.ngOnInit();
        // location.reload();
      }, error => {
        console.log('error');
      });
    } else {
      alert('Ban khong xoa');
    }
  }
}

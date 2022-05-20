import {Component, OnInit} from '@angular/core';
import {ServiceFuramaService} from "../service/service-furama.service";
import {IService} from "../model/IService";

@Component({
  selector: 'app-furama-service',
  templateUrl: './furama-service.component.html',
  styleUrls: ['./furama-service.component.css']
})
export class FuramaServiceComponent implements OnInit {
  service: any[] = [];

  constructor(
    private _service: ServiceFuramaService
  ) {
  }

  saveItem(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.service.push(arr[i]);
    }
  }

  ngOnInit(): void {
    this.service = [];
    this._service.getVilla().subscribe(data => {
        this.saveItem(data);
      },
      error => {
        console.log('errors');
      });
    this._service.getHouse().subscribe(data => {
      this.saveItem(data);
    });
    this._service.getRoom().subscribe(data => {
      this.saveItem(data);
    });
    console.log(this.service);
  }

  delete(id: number, name: string) {
    let name1 = name.toLowerCase();
    if (name1 === 'villa') {
      this._service.deleteVilla(id).subscribe(() => {
        console.log("delete");
      });
      this.ngOnInit();
    }
    if (name1 === 'house') {
      this._service.deleteHouse(id).subscribe(() => {
        console.log("delete house");
      });
      this.ngOnInit();
    }
    if (name1 === 'room') {
      this._service.deleteRoom(id).subscribe(() => {
        console.log("delete room");
      });
      this.ngOnInit();
    }
  }
}

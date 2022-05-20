import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceFuramaService} from '../service/service-furama.service';
import {IVilla} from "../model/IVilla";
import {IRoom} from "../model/IRoom";
import {IHouse} from "../model/IHouse";
import {IService} from "../model/IService";

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.css']
})
export class ServiceUpdateComponent implements OnInit {
  id: number;
  name: string;
  service: IService| undefined;
  service1: any = [];

  constructor(
    // tslint:disable-next-line:variable-name
    private _service: ServiceFuramaService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getValue();
    if (this.name.toLowerCase() === 'villa') {
      this._service.getVillaById(this.id).subscribe(data => {
        this.service = data;
      });
    }
    if (this.name.toLowerCase() === 'room') {
      this._service.getRoomById(this.id).subscribe(data => {
        this.service = data;
      });
    }
    if (this.name.toLowerCase() === 'house') {
      this._service.getHouseById(this.id).subscribe(data => {
        this.service = data;
      });
    }
    console.log(this.service);
    console.log(this.name);
  }

  getValue() {
    this.name = this.activatedRoute.snapshot.params['name'];
    this.id = this.activatedRoute.snapshot.params['id'];
  }

}

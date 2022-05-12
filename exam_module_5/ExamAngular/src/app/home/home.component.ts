import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {IModel} from "../IModel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model:IModel[];
  constructor(private service: ServiceService) {
  }

  ngOnInit(
  ): void {
    this.service.getAll().subscribe(data=>{
      this.model = data;
    }, error => {
      console.log("errors");
    })
  }

}
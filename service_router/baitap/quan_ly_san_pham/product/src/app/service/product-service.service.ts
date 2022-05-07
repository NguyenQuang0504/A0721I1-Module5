import { Injectable } from '@angular/core';
import {IProduct} from "../IProduct";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: IProduct[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];
  getAll(){
    return this.products;
  }
  constructor() { }

  add(value: any) {
    this.products.push(value);
  }

  findById(id: any) {
    for (let i:number = 0;i<this.products.length;i++){
      if (this.products[i].id==id){
        return this.products[i];
      }
    }
    return undefined;
  }

  update(product1: any) {
    for (let i:number = 0;i<this.products.length;i++){
      if (this.products[i].id===product1.id){
        this.products[i] = product1;
      }
    }
  }

  delete(id: number) {
    for (let i:number = 0;i<this.products.length;i++){
      if (this.products[i].id==id){
        for (let j=i;j<this.products.length;j++){
          this.products[j] = this.products[j+1];
        }
        this.products.pop();
      }
    }
  }
}

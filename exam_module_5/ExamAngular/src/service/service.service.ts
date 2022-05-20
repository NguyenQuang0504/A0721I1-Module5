import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IModel} from "../app/IModel";
const API_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IModel[]> {
    return this.httpClient.get<IModel[]>(API_URL + '/model');
  }
  findById(id:number):Observable<IModel>{
    return this.httpClient.get<IModel>(API_URL+ '/model' +'/'+id);
  }
  update(model:IModel):Observable<IModel>{
    return this.httpClient.put<IModel>(API_URL+ '/model' +'/'+model.id, model);
  }
  delete(id:number):Observable<IModel>{
    return this.httpClient.delete<IModel>(API_URL+ '/model' +'/'+id);
  }
  create(model: IModel):Observable<IModel>{
    return this.httpClient.post<IModel>(API_URL + '/model', model);
  }
  // search(value1: string, value2:string):Observable<IModel[]>{
  //   return this._httpClient.get<IModel[]>(API_URL + '/model' +'?name_like=' +value1 +'&price_like=' +value2);
  // }
//&_sort=price&_order=asc sort
}

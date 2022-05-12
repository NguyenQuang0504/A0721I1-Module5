import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IModel} from "../app/IModel";
const API_URL = 'http://localhost:3000/model';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IModel[]> {
    return this.httpClient.get<IModel[]>(API_URL);
  }
  findById(id:number):Observable<IModel>{
    return this.httpClient.get<IModel>(API_URL+'/'+id);
  }
  update(model:IModel):Observable<IModel>{
    return this.httpClient.put<IModel>(API_URL+'/'+model.id, model);
  }
  delete(id:number):Observable<IModel>{
    return this.httpClient.delete<IModel>(API_URL+'/'+id);
  }
  create(model: IModel):Observable<IModel>{
    return this.httpClient.post<IModel>(API_URL, model);
  }
}

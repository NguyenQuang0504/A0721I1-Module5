/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomer} from "./model/ICustomer";
import {Router} from "@angular/router";
const API_URL = 'http://localhost:8080/api/customer/';
@Injectable({
  providedIn: 'root'
})


export class HomeServiceService {

  constructor(private httpClient: HttpClient,
              private route:Router) {
  }

  getAll(page:number, size:number): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(API_URL +'?size=' +size +'&page=' +page );
  }
  getById(id:number):Observable<ICustomer>{
    return this.httpClient.get<ICustomer>(API_URL +'find/' + id);
  }
  createCustomer(customer:ICustomer):Observable<ICustomer>{
    return this.httpClient.post<ICustomer>(API_URL + 'create', customer);
  }
  delete(id:number):Observable<ICustomer>{
    return this.httpClient.delete<ICustomer>(API_URL +id);
  }
  getAllList():Observable<ICustomer[]>{
    return this.httpClient.get<ICustomer[]>(API_URL + 'get');
  }
  search(input:string, attribute:string):Observable<ICustomer[]>{
    return this.httpClient.get<ICustomer[]>(API_URL +'search?input='+input +'&attribute=' +attribute)
  }
  update(id:number, customer:ICustomer):Observable<ICustomer>{
    return this.httpClient.put<ICustomer>(API_URL +id, customer);
  }
}

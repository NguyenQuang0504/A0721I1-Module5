import {Injectable} from '@angular/core';
import {IProduct} from "../IProduct";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const
  API_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _httpClient: HttpClient) {
  }
// getAll sort and paging
  getAll(page:number): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(API_URL + '/product' +'?_page=' +page +'&_limit=3&_sort=price&_order=asc');
  }

  save(value): Observable<IProduct> {
    return this._httpClient.post<IProduct>(API_URL + '/product', value);
  }

  findById(id): Observable<IProduct> {
    return this._httpClient.get<IProduct>(API_URL + '/product' + '/' + id);
  }

  update(id, product1): Observable<IProduct> {
    return this._httpClient.put<IProduct>(API_URL + '/product' + '/' + id, product1);
  }

  delete(id: number): Observable<IProduct> {
    return this._httpClient.delete<IProduct>(API_URL + '/product/' + id);
  }
  search(value1: string, value2:string):Observable<IProduct[]>{
    return this._httpClient.get<IProduct[]>(API_URL +'/product' +'?name_like=' +value1 +'&price_like=' +value2);
  }
  // sort():Observable<IProduct[]>{
  //   return this._httpClient.get<IProduct[]>(API_URL +'/product' +'?_sort=price&_order=asc');
  // }
}

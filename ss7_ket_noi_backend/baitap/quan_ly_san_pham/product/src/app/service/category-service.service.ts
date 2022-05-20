import {Injectable} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ICategory} from "../ICategory";

const API_URL = "http://localhost:3000/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ICategory[]> {
    return this._httpClient.get<ICategory[]>(`${API_URL}`);
  }

  getCategoryByID(id): Observable<ICategory> {
    return this._httpClient.get<ICategory>(`${API_URL}/${id}`);
  }
}

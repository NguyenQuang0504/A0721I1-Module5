import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPositionEmployee} from '../model/IPositionEmployee';

const API_URL = 'http://localhost:3000/position';

@Injectable({
  providedIn: 'root'
})
export class PositionServerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPositionEmployee[]> {
    return this.httpClient.get<IPositionEmployee[]>(API_URL);
  }
}

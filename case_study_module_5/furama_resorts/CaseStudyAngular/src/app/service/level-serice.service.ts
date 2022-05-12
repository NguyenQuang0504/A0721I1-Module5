import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ILevelEmployee} from '../model/ILevelEmployee';

const API_URL = 'http://localhost:5000/level';
@Injectable({
  providedIn: 'root'
})
export class LevelSericeService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAll(): Observable<ILevelEmployee[]> {
    return this.httpClient.get<ILevelEmployee[]>(API_URL);
  }
}

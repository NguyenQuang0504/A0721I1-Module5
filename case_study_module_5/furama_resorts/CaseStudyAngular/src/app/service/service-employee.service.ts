import {Injectable} from '@angular/core';
import {IEmployee} from '../model/IEmployee';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmployeeService {
  employee: IEmployee[] = [
    {
      name: 'Nguyen Van Quang',
      date: '05/04/2000',
      phone: '0397111634',
      cccd: '164200000325',
      email: 'quang10a30504@gmail.com',
      level: 'Tien sy',
      position: 'Giam doc',
      salary: 1000
    },
    {
      name: 'Nguyen Van Quang 2',
      date: '05/04/2000',
      phone: '0397111634',
      cccd: '16421111111',
      email: 'quang10a30504@gmail.com',
      level: 'Tien sy',
      position: 'Giam doc',
      salary: 1000
    },
    {
      name: 'Nguyen Van Quang 3',
      date: '05/04/2000',
      phone: '0397111634',
      cccd: '16423333333',
      email: 'quang10a30504@gmail.com',
      level: 'Tien sy',
      position: 'Giam doc',
      salary: 1000
    }
  ];

  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) {
  }

  delete(id: number): Observable<IEmployee> {
    return this._httpClient.delete<IEmployee>(API_URL + '/employee' + '/' + id);
  }

  findAll(): Observable<IEmployee[]> {
    return this._httpClient.get<IEmployee[]>(API_URL + '/employee');
  }

  findById(id: number): Observable<IEmployee> {
    return this._httpClient.get<IEmployee>(API_URL + '/employee' + '/' + id);
  }

  update(id: number, employee1): Observable<IEmployee> {
    return this._httpClient.put<IEmployee>(API_URL + '/employee/'+id, employee1);
  }

  create(employee: IEmployee): Observable<IEmployee> {
    return this._httpClient.post<IEmployee>(API_URL + '/employee', employee);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IVilla} from '../model/IVilla';
import {IRoom} from '../model/IRoom';
import {IHouse} from '../model/IHouse';

const API_URL = ' http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ServiceFuramaService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getVilla(): Observable<IVilla> {
    return this.httpClient.get<IVilla>(API_URL + '/villa');
  }

  getRoom(): Observable<IRoom> {
    return this.httpClient.get<IRoom>(API_URL + '/room');
  }

  getHouse(): Observable<IHouse> {
    return this.httpClient.get<IHouse>(API_URL + '/house');
  }

  deleteVilla(id: number): Observable<IVilla> {
    return this.httpClient.delete<IVilla>(API_URL + '/villa' + '/' + id);
  }

  deleteHouse(id: number): Observable<IHouse> {
    return this.httpClient.delete<IHouse>(API_URL + '/house' + '/' + id);
  }

  deleteRoom(id: number): Observable<IRoom> {
    return this.httpClient.delete<IRoom>(API_URL + '/room' + '/' + id);
  }

  getVillaById(id: number): Observable<IVilla> {
    return this.httpClient.get<IVilla>(API_URL + '/villa/' + id);
  }

  getHouseById(id: number): Observable<IHouse> {
    return this.httpClient.get<IHouse>(API_URL + '/house/' + id);
  }

  getRoomById(id: number): Observable<IRoom> {
    return this.httpClient.get<IRoom>(API_URL + '/room/' + id);
  }

  updateHouseById(id: number, value: any): Observable<IHouse> {
    return this.httpClient.put<IHouse>(API_URL + '/house/' + id, value);
  }

  updateVillaById(id: number, value: any): Observable<IVilla> {
    return this.httpClient.put<IVilla>(API_URL + '/villa/' + id, value);
  }

  updateRoomById(id: number, value: any): Observable<IRoom> {
    return this.httpClient.put<IRoom>(API_URL + '/room/' + id, value);
  }
}

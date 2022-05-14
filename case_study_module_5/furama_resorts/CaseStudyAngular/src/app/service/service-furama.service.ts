import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
const API_URL = ' http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ServiceFuramaService {

  constructor(
    private httpClient:HttpClient
  ) { }
  getVilla()
}

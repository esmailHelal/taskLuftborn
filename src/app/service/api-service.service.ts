import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private _HttpClient: HttpClient) {}
  getItems(): Observable<any> {
    return this._HttpClient.get(`https://fakestoreapi.com/products?limit=10`);
  }
}

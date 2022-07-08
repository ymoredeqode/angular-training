import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from 'src/app/interface/posts';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private BASE_URL = 'https://jsonplaceholder.typicode.com/';

  //noraml api call
  // getData(data: any) {
  //   return this.http.get(this.BASE_URL + data.url);
  // }

  // getData(data: any) {
  //   return this.http.get<Config>(this.BASE_URL + data.url);
  // }

  getData(data: any): Observable<HttpResponse<Config[]>> {
    return this.http.get<Config[]>(this.BASE_URL + data.url, { observe: 'response' });
  }

  setData(data: any): Observable<HttpResponse<Config[]>> {
    return this.http.get<Config[]>(this.BASE_URL + data.url, { observe: 'response' });
  }
}



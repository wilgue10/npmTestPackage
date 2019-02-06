import { User } from './models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {


  constructor(private http: HttpClient) { }

  request(): Observable<User[]> {
    const endpoint = 'https://jsonplaceholder.typicode.com/';
    const urlParams = 'todos/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(endpoint + urlParams).pipe(map((response: any) => {
      return response as User[];
    }));
  }
}

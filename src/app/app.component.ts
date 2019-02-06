import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';
import { ServiceTestService } from './service-test.service';
import { Component, OnInit } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testNpmHello';
  listUser: User[] = [];
  constructor(private http: HttpClient
    ) {
      exports.printMsg = function() {
        console.log('This is a message from the demo packageConstructor');
      }
  }
  ngOnInit() {
    this.request().subscribe(response => {
      this.listUser = response;
      console.log(this.listUser);
    })
    exports.printMsg = function() {
      console.log('This is a message from the demo package');
    }
  }
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

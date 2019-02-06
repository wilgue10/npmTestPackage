import { User } from './models/user';
import { Observable } from 'rxjs';
import { ServiceTestService } from './service-test.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testNpmHello';
  listUser: User[] = [];
  constructor(private serviceTestService: ServiceTestService, ) {

  }
  ngOnInit() {
    this.serviceTestService.request().subscribe(response => {
      this.listUser = response;
      console.log(this.listUser);
    })
  }
}

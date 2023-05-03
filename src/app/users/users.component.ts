import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})

export class UsersComponent implements OnInit {
  users!: any[];

  apiUrl = 'http://localhost:3000/users'; // Define the API endpoint

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe(response => {
      this.users = response.userData;
      console.log(this.users);
    });
  }
}

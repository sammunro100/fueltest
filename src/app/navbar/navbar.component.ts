import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService,
    private readonly http: HttpClient) { }

  ngOnInit() {
    // On initial load, set up local auth streams
    this.auth.localAuthSetup();
  }

  callApi() {
    this.http.get('https://localhost:5001/api/user').subscribe((res) => {
      console.log('Succesful call to localhost:5001/api/user YAY!', res)
    }, (err) => {
      console.error('there has been an erroring calling /api/user', err)
    })
  }


  callTest() {
    this.http.get('https://localhost:5001/api/test').subscribe((res) => {
      console.log('Succesful call to localhost:5001/api/test YAY!', res)
    }, (err) => {
      console.error('there has been an erroring calling /api/test', err)
    })
  }
}
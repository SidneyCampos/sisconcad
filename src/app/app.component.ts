import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'sisconcad';

  constructor(private auth: AuthService, private router: Router) {

  }

  // logout() {
  //   this.router.navigate(['login'])
  // }

  logout() {
    this.auth.logout()
      .then(() => {
        this.router.navigate(['login'])
      })
  }

}

import { AppUser } from './../models/app-user';
import { AuthService } from './../service-auth/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'bootstrap-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  appUserObservable: Observable<AppUser>;

  constructor(private auth: AuthService) {
    this.appUserObservable = auth.getUserObservable();
  }

  logout() {
    this.auth.logout();
  }
}

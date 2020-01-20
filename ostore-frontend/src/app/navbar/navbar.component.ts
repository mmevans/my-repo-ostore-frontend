import { AppUser } from './../models/app-user';
import { AuthService } from './../service-auth/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'bootstrap-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  appUser: AppUser;
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => (this.appUser = appUser));
  }

  logout() {
    this.auth.logout();
  }
}

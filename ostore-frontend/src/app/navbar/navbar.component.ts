import { AuthService } from './../service-auth/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'bootstrap-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  user$: Observable<firebase.User>;

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}

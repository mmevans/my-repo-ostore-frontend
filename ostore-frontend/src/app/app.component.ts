import { AuthService } from './service-auth/auth.service';
import { UserService } from './service-user/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    router: Router,
    private userService: UserService
  ) {
    this.auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);
        const returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}

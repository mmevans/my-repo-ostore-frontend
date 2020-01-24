import { AuthService } from './shared/service-auth/auth.service';
import { UserService } from './shared/service-user/user.service';
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
    this.auth.userObservable.subscribe(user => {
      if (user) {
        this.userService.save(user);
        const returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}

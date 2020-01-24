import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from '../../shared/service-user/user.service';
import { AuthService } from '../../shared/service-auth/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private userService: UserService) {}

  canActivate(): Observable<any> {
    return this.auth.userObservable
      .pipe(switchMap(user => this.userService.get(user.uid)))
      .pipe(map(appUser => appUser.isAdmin));
  }
}

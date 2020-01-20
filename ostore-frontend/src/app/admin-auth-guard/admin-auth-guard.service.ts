import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from './../service-user/user.service';
import { AuthService } from './../service-auth/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.auth.appUser$.pipe(map(appUser => appUser.isAdmin));
  }
}

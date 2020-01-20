import { UserService } from './../service-user/user.service';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User, auth } from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from '../models/app-user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(
    public angularFirebaseAuth: AngularFireAuth,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user$ = angularFirebaseAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.angularFirebaseAuth.auth.signInWithRedirect(
      new auth.GoogleAuthProvider()
    );
  }

  logout() {
    this.angularFirebaseAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(
      switchMap(user => this.userService.get(user.uid).valueChanges())
    );
  }
}

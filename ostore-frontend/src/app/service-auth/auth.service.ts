import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    public angularFirebaseAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user$ = angularFirebaseAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.angularFirebaseAuth.auth.signInWithRedirect(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logout() {
    this.angularFirebaseAuth.auth.signOut();
  }
}

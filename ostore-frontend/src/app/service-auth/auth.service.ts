import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(public angularFirebaseAuth: AngularFireAuth) {
    this.user$ = angularFirebaseAuth.authState;
  }

  login() {
    this.angularFirebaseAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.angularFirebaseAuth.auth.signOut();
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FsauthService {
  constructor(public fsauth: AngularFireAuth) {}
  logOut() {
    this.fsauth.signOut();
  }
}

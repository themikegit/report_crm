import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-auth-form-register',
  templateUrl: './auth-form-register.component.html',
  styleUrls: ['./auth-form-register.component.css'],
})
export class AuthFormRegisterComponent implements OnInit {
  constructor(public fsauth: AngularFireAuth) {}

  ngOnInit(): void {
    console.log(this.fsauth.user);
    this.userRegister = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  userRegister: FormGroup;

  onLogIn() {
    this.fsauth
      .createUserWithEmailAndPassword(
        this.userRegister.value.email,
        this.userRegister.value.password
      )
      .then((res) => console.log(res));
    console.log(this.userRegister.value);
  }
}

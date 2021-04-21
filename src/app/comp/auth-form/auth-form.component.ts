import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  private message;
  constructor(
    public fsauth: AngularFireAuth,
    private toastService: NbToastrService
  ) {}

  userLogIn: FormGroup;

  onLogIn() {
    this.fsauth
      .signInWithEmailAndPassword(
        this.userLogIn.value.email,
        this.userLogIn.value.password
      )
      .then((res) => {
        this.message = `Welcome ${res.user.email} `;
        setTimeout(() => {
          this.showToast('top-right', 'success');
        }, 1000);

        console.log(this.message);
      })
      .catch((err) => {
        this.message = err.message;
        this.showToast('top-right', 'warning');
      });
  }

  showToast(position, status) {
    this.toastService.show(status, ` ${this.message}`, {
      position,
      status,
    });
  }

  ngOnInit(): void {
    console.log(this.fsauth.user);
    this.userLogIn = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
}

import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private sidebarService: NbSidebarService,
    public fsauth: AngularFireAuth
  ) {}

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}

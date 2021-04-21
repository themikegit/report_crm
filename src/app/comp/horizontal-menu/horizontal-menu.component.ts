import { Component, OnInit } from '@angular/core';
import { FsauthService } from 'src/app/fsauth.service';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.css'],
})
export class HorizontalMenuComponent implements OnInit {
  constructor(private fsauth: FsauthService) {}

  onClick() {
    this.fsauth.logOut();
  }

  ngOnInit(): void {}
}

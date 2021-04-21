import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css'],
})
export class VerticalMenuComponent {
  constructor() {}

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'grid-outline',
      link: '/',
    },
    {
      title: 'Change Password',
      icon: 'bar-chart-outline',
      link: 'report',
    },
    {
      title: 'Archive',
      icon: 'archive-outline',
      link: 'archive',
    },
  ];
}

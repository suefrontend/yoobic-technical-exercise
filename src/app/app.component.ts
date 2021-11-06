import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages = [
    { title: 'Master List', url: '/masterlist', icon: 'mail' },
    { title: 'Sign In', url: '/signin', icon: 'paper-plane' },
    { title: 'Stencil Component', url: '/stencil', icon: 'heart' },
    { title: 'Link', url: '#', icon: 'archive' },
    { title: 'Link', url: '#', icon: 'trash' },
    { title: 'Link', url: '#', icon: 'warning' },
  ];

  constructor() {}
}

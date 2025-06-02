import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Ferramentas', url: '/ferramentas', icon: 'construct' },
    { title: 'Perfil', url: '/perfil', icon: 'person' },
  ];
  public labels = [];
  constructor() {}
}

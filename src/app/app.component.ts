import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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

  usuarioNome: string = 'Usuário';
  // Agora o avatar padrão é o Curupira
  usuarioAvatar: string = 'https://th.bing.com/th/id/OIP.GwKvkFOuvg1p44_Tw6e4lwHaEK?rs=1&pid=ImgDetMain';

  constructor(private router: Router) {
    this.carregarUsuario();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.carregarUsuario();
      }
    });
  }

  carregarUsuario() {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (usuario && usuario.nome) {
      this.usuarioNome = usuario.nome;
    } else {
      this.usuarioNome = 'Usuário';
    }
    const avatar = localStorage.getItem('avatar');
    if (avatar) {
      this.usuarioAvatar = avatar;
    } else {
      // Avatar padrão: Curupira
      this.usuarioAvatar = 'https://th.bing.com/th/id/OIP.GwKvkFOuvg1p44_Tw6e4lwHaEK?rs=1&pid=ImgDetMain';
    }
  }

  logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('avatar');
    this.router.navigate(['/login']);
  }

  isAuthRoute(): boolean {
    const url = this.router.url;
    return url.startsWith('/login') || url.startsWith('/cadastro');
  }
}
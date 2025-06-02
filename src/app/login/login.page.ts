import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email = '';
  senha = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async login() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find((u: any) => u.email === this.email && u.senha === this.senha);
    if (usuario) {
      // Salva o usuário logado para controle de sessão
      localStorage.setItem('usuario', JSON.stringify(usuario));
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'E-mail ou senha inválidos!',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}

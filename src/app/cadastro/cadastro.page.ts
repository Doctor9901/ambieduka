import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false,
})
export class CadastroPage {
  nome = '';
  email = '';
  senha = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async cadastrar() {
    // Busca usuários já cadastrados
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    // Verifica se já existe usuário com o mesmo e-mail
    if (usuarios.some((u: any) => u.email === this.email)) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'E-mail já cadastrado!',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
    // Adiciona novo usuário
    usuarios.push({
      nome: this.nome,
      email: this.email,
      senha: this.senha
      // Adicione outros campos se quiser
    });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    const alert = await this.alertController.create({
      header: 'Cadastro realizado!',
      message: 'Agora faça login para acessar o app.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/login']);
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }
}

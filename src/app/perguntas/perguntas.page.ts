import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
  standalone: false,
})
export class PerguntasPage implements OnInit {

  async pergunta1() {
    const alert = await this.alertController.create({
      header: 'Você Errou',
      message: 'A resposta correta e a letra: B',
      buttons: ['Action'],
    });

    await alert.present();
  }

  async pergunta1_1() {
    const alert = await this.alertController.create({
      header: 'Você Acertou',
      message: 'A planta possui nutrientes e tal.',
      buttons: ['Action'],
    });

    await alert.present();
  }
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

}

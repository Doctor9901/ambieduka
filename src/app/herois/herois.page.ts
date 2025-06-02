import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.page.html',
  styleUrls: ['./herois.page.scss'],
  standalone: false,
})
export class HeroisPage implements OnInit {

async curupira() {
    const alert = await this.alertController.create({
      header: 'Curupira',
      message: 'Informação',
      buttons: ['Selecionado'],
    });

    await alert.present();
  }

  async caipora() {
    const alert = await this.alertController.create({
      header: 'Caipora',
      message: 'Informação',
      buttons: ['Selecionado'],
    });

    await alert.present();
  }

  async boitata() {
    const alert = await this.alertController.create({
      header: 'Boitatá',
      message: '???',
      buttons: ['Indisponivel'],
    });

    await alert.present();
  }
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  voltar() {
    window.history.back();
}
}

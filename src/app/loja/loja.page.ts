import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
  standalone: false,
})
export class LojaPage implements OnInit {

  async escudo() {
    const alert = await this.alertController.create({
      header: 'Escudo',
      message: 'Adquirido',
      buttons: ['fechar'],
    });

    await alert.present();
  }

 async balde() {
    const alert = await this.alertController.create({
      header: 'Balde',
      message: 'Adquirido',
      buttons: ['fechar'],
    });

    await alert.present();
  }

 async dobro() {
    const alert = await this.alertController.create({
      header: 'Dobro de Exp',
      message: 'Adquirido',
      buttons: ['fechar'],
    });

    await alert.present();
  }

 async dica() {
    const alert = await this.alertController.create({
      header: 'Dica',
      message: 'Adquirido',
      buttons: ['fechar'],
    });

    await alert.present();
  }

 async boitata() {
    const alert = await this.alertController.create({
      header: 'Boitatá',
      message: 'Adquirido',
      buttons: ['fechar'],
    });

    await alert.present();
  }

 async fertilizante() {
    const alert = await this.alertController.create({
      header: 'Fertilizante',
      message: 'Adquirido',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  async pacote() {
    const alert = await this.alertController.create({
      header: 'Pacote de Plantas',
      message: 'Adquirido',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

}

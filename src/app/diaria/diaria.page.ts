import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-diaria',
  templateUrl: './diaria.page.html',
  styleUrls: ['./diaria.page.scss'],
  standalone: false,
})
export class DiariaPage implements OnInit {

async segunda() {
    const alert = await this.alertController.create({
      header: 'Escudo',
      message: 'Um escudo que protege por 2 dias sua plantação de vermes, insetos e parasitas',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  async terca() {
    const alert = await this.alertController.create({
      header: 'Balde',
      message: 'Um recipiente bom para colocar sua planta',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  async quarta() {
    const alert = await this.alertController.create({
      header: 'Dobro de Exp',
      message: 'Parabéns você ganhou dobro de exp isso vai aumentar seu ganho de exp durante os niveis',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  async quinta() {
    const alert = await this.alertController.create({
      header: 'Dica',
      message: 'informação sobre os itens ou ajudar extra para passar de fase',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  async sexta() {
    const alert = await this.alertController.create({
      header: 'Fertilizante',
      message: 'Item que agiliza na produção da planta',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  async sabado() {
    const alert = await this.alertController.create({
      header: 'Pacotes de Plantas',
      message: 'Pacotes de plantas aleatorias para liberar',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  async domingo() {
    const alert = await this.alertController.create({
      header: 'Gemas',
      message: 'Parabéns você ganhou 100 gemas',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

}

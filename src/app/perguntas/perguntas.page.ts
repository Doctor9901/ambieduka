import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PERGUNTAS } from './perguntas.data';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
  standalone: false,
})
export class PerguntasPage {
  perguntas = PERGUNTAS;
  perguntaAtual = 0;
  respostaSelecionada: number | null = null;
  resultado: boolean | null = null;

  // Lista única das etapas, na ordem de aparição
  etapas = Array.from(new Set(this.perguntas.map(p => p.etapa)));

  constructor(private alertController: AlertController) {}

  async selecionarResposta(idx: number) {
    this.respostaSelecionada = idx;
    const correta = this.perguntas[this.perguntaAtual].resposta;
    this.resultado = idx === correta;

    const alert = await this.alertController.create({
      header: this.resultado ? 'Você Acertou!' : 'Você Errou',
      message: this.resultado
        ? 'Parabéns, resposta correta!'
        : `A resposta correta é: ${this.letraAlternativa(correta)} - ${this.perguntas[this.perguntaAtual].alternativas[correta]}`,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.proximaPergunta();
        }
      }],
      backdropDismiss: false
    });

    await alert.present();
  }

  proximaPergunta() {
    if (this.perguntaAtual < this.perguntas.length - 1) {
      this.perguntaAtual++;
      this.respostaSelecionada = null;
      this.resultado = null;
    } else {
      // Opcional: mostrar mensagem de conclusão
    }
  }

  letraAlternativa(i: number): string {
    return String.fromCharCode(65 + i); // 65 = 'A'
  }

  numeroEtapa(etapa: string): number {
    return this.etapas.indexOf(etapa) + 1;
  }
  voltar() {
    window.history.back();
}
}

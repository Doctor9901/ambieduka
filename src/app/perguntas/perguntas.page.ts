import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

// Defina a interface Pergunta
interface Pergunta {
  texto: string;
  alternativas: string[];
  respostaCorreta: number;
  etapa?: string;
}

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
  standalone: false,
})
export class PerguntasPage implements OnInit {
  perguntas: Pergunta[] = [
    {
      texto: 'O que é germinação?',
      alternativas: [
        'Quando a planta está totalmente crescida',
        'Quando a planta é colhida',
        'Quando as flores aparecem',
        'Quando a semente começa a crescer',
      ],
      respostaCorreta: 3,
    },
    {
      texto: 'O que a semente precisa para germinar?',
      alternativas: [
        'Água, calor e ar',
        'Somente luz',
        'Apenas água',
        'Somente solo',
      ],
      respostaCorreta: 0,
    },
    {
      texto: 'Qual parte da planta absorve água do solo?',
      alternativas: [
        'Folha',
        'Raiz',
        'Caule',
        'Flor',
      ],
      respostaCorreta: 1,
    },
    {
      texto: 'Qual é a principal função das folhas?',
      alternativas: [
        'Absorver água',
        'Realizar fotossíntese',
        'Proteger a raiz',
        'Armazenar sementes',
      ],
      respostaCorreta: 1,
    },
    {
      texto: 'O que é fotossíntese?',
      alternativas: [
        'Processo de respiração das plantas',
        'Processo de produção de flores',
        'Processo de produção de alimento usando luz',
        'Processo de absorção de água',
      ],
      respostaCorreta: 2,
    },
    {
      texto: 'Qual gás as plantas absorvem do ar para a fotossíntese?',
      alternativas: [
        'Oxigênio',
        'Hidrogênio',
        'Dióxido de carbono',
        'Nitrogênio',
      ],
      respostaCorreta: 2,
    },
    {
      texto: 'Qual parte da planta transporta água das raízes para as folhas?',
      alternativas: [
        'Flor',
        'Caule',
        'Fruto',
        'Semente',
      ],
      respostaCorreta: 1,
    },
    {
      texto: 'O que é polinização?',
      alternativas: [
        'Crescimento das raízes',
        'Transferência de pólen para fertilização',
        'Produção de frutos',
        'Absorção de água',
      ],
      respostaCorreta: 1,
    },
    {
      texto: 'Qual desses NÃO é um tipo de raiz?',
      alternativas: [
        'Axial',
        'Fasciculada',
        'Adventícia',
        'Foliar',
      ],
      respostaCorreta: 3,
    },
    {
      texto: 'O que é uma planta perene?',
      alternativas: [
        'Vive apenas um ano',
        'Vive por vários anos',
        'Vive apenas em água',
        'Vive sem luz',
      ],
      respostaCorreta: 1,
    },
    {
      texto: 'Qual é a função do fruto?',
      alternativas: [
        'Proteger e dispersar as sementes',
        'Realizar fotossíntese',
        'Absorver água',
        'Produzir pólen',
      ],
      respostaCorreta: 0,
    },
    {
      texto: 'O que é clorofila?',
      alternativas: [
        'Hormônio vegetal',
        'Pigmento responsável pela cor verde e fotossíntese',
        'Tipo de raiz',
        'Parte da flor',
      ],
      respostaCorreta: 1,
    }
  ];

  pontuacao = 0; // Adicione esta propriedade

  perguntaAtual = 0;
  respostaSelecionada: number | null = null;
  resultado: boolean | null = null;

  // Lista única das etapas, na ordem de aparição
  etapas = Array.from(new Set(this.perguntas.map(p => p.etapa)));

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async responder(alternativaIdx: number) {
    const pergunta = this.perguntas[this.perguntaAtual];
    const acertou = alternativaIdx === pergunta.respostaCorreta;
    if (acertou) this.pontuacao++;

    const alert = await this.alertController.create({
      header: acertou ? 'Você Acertou!' : 'Você Errou!',
      message: acertou
        ? 'Parabéns, resposta correta.'
        : `A resposta correta é: ${pergunta.alternativas[pergunta.respostaCorreta]}`,
      buttons: [{
        text: this.perguntaAtual < this.perguntas.length - 1 ? 'Próxima' : 'Finalizar',
        handler: () => this.proximaPergunta()
      }]
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

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Pergunta {
  texto: string;
  alternativas: string[];
  respostaCorreta: number;
}

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
  standalone: false,
})
export class PerguntasPage implements OnInit {
  carregando = true;
  erro = '';
  quizFinalizado = false;

  gemas = 0; // Adicione aqui
  respostaSelecionada: number | null = null;
  acertou = false;

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

  perguntaAtual = 0;
  pontuacao = 0;

  constructor(private alertController: AlertController) {}

  ngOnInit() {}
 
  async responder(alternativaIdx: number) {
  this.respostaSelecionada = alternativaIdx;
  const pergunta = this.perguntas[this.perguntaAtual];
  this.acertou = alternativaIdx === pergunta.respostaCorreta;
  if (this.acertou) {
    this.pontuacao++;
    this.gemas += 5;
  }

  const alert = await this.alertController.create({
    header: this.acertou ? 'Você Acertou!' : 'Você Errou!',
    message: this.acertou
      ? 'Parabéns, resposta correta.'
      : `A resposta correta é: ${pergunta.alternativas[pergunta.respostaCorreta]}`,
    buttons: [{
      text: this.perguntaAtual < this.perguntas.length - 1 ? 'Próxima' : 'Finalizar',
      handler: () => this.proximaPergunta()
    }]
  });

  await alert.present();
}
// ...existing code...

  proximaPergunta() {
    if (this.perguntaAtual < this.perguntas.length - 1) {
      this.perguntaAtual++;
    } else {
      this.finalizarQuiz();
    }
  }

  async finalizarQuiz() {
    const alert = await this.alertController.create({
      header: 'Quiz Finalizado!',
      message: `Sua pontuação: ${this.pontuacao} de ${this.perguntas.length}`,
      buttons: ['OK']
    });
    await alert.present();
    this.perguntaAtual = 0;
    this.pontuacao = 0;
  }
}
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class QuizLogicService {
  calcularPontuacao(respostas: number[], perguntas: { respostaCorreta: number }[]): number {
    return respostas.filter((r, i) => r === perguntas[i].respostaCorreta).length;
  }
}
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: false,
})

export class QuizPage implements OnInit {

  constructor(private quizLogice: QuizLogicService) { }

  ngOnInit() {
  }

}

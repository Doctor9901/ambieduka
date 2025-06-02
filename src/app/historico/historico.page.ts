import { Component, OnInit } from '@angular/core';

interface Atividade {
  tipo: 'jogo' | 'powerup' | 'outro';
  descricao: string;
  data: string;
  detalhe?: string;
  powerupIcone?: string;
}

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
  standalone: false,
})
export class HistoricoPage implements OnInit {

  atividades: Atividade[] = [];

  constructor() { }

  ngOnInit() {
    // Exemplo: Carregar atividades do localStorage ou serviço
    this.atividades = [
      {
        tipo: 'jogo',
        descricao: 'Jogou "Desafio da Floresta"',
        data: '2025-06-01 14:30',
        detalhe: 'Pontuação: 1200'
      },
      {
        tipo: 'powerup',
        descricao: 'Comprou PowerUp: Dica Extra',
        data: '2025-06-01 15:00',
        powerupIcone: 'flash'
      },
      {
        tipo: 'jogo',
        descricao: 'Jogou "Quiz dos Animais"',
        data: '2025-06-02 10:10',
        detalhe: 'Pontuação: 900'
      }
    ];

    // Aqui você pode carregar do localStorage ou serviço real
    // Exemplo:
    // const atividadesSalvas = localStorage.getItem('atividades');
    // if (atividadesSalvas) this.atividades = JSON.parse(atividadesSalvas);
  }

  voltar() {
    window.history.back();
  }
}

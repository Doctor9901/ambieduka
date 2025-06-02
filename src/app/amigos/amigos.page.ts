import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
  standalone: false,
})
export class AmigosPage implements OnInit {
  nomeProcurado = '';

  constructor(private rota: Router) {}

  ngOnInit() {}

  adicionar() {
    this.rota.navigate(['/encotrar']);
  }
  voltar() {
    window.history.back();
  }

  procurarAmigo() {
    // lógica de busca
    if (this.nomeProcurado.trim()) {
      // Buscar amigo
    }
  }
}

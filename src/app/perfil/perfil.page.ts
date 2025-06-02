import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {

  constructor(private rota:Router) { }

  ngOnInit() {
  }
edicao() {
  this.rota.navigate(['/edicao'])
}
historico() {
  this.rota.navigate(['/historico'])
}
configuracoes() {
  this.rota.navigate(['configuracoes'])
}
suporte() {
  this.rota.navigate(['/suporte'])
}
}

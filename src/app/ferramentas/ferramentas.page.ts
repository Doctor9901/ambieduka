import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ferramentas',
  templateUrl: './ferramentas.page.html',
  styleUrls: ['./ferramentas.page.scss'],
  standalone: false,
})
export class FerramentasPage implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {
  }
diaria() {
  this.rota.navigate(['/diaria'])
}
herois() {
  this.rota.navigate(['/herois'])
}
loja() {
  this.rota.navigate(['/loja'])
}
glossario() {
  this.rota.navigate(['/glossario'])
}
}

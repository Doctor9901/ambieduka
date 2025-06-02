import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogar',
  templateUrl: './jogar.page.html',
  styleUrls: ['./jogar.page.scss'],
  standalone: false,
})
export class JogarPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
perguntas() {
  this.route.navigate(['/perguntas'])
}
voltar() {
  window.history.back();
}
}
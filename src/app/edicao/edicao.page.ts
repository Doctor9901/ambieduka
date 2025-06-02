import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.page.html',
  styleUrls: ['./edicao.page.scss'],
  standalone: false,
})
export class EdicaoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
imagens() {
  this.route.navigate(['/imagens'])
}
voltar() {
  window.history.back();
}

}

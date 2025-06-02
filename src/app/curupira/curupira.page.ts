import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curupira',
  templateUrl: './curupira.page.html',
  styleUrls: ['./curupira.page.scss'],
  standalone: false,
})
export class CurupiraPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
imagens() {
  this.route.navigate(['/imagens'])
}
voltar() {
  window.history.back();
}
}

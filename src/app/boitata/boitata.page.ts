import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boitata',
  templateUrl: './boitata.page.html',
  styleUrls: ['./boitata.page.scss'],
  standalone: false,
})
export class BoitataPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
imagens() {
  this.route.navigate(['/imagens'])
}
voltar() {
  this.route.navigate(['/perfil']);
}
}

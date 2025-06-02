import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encotrar',
  templateUrl: './encotrar.page.html',
  styleUrls: ['./encotrar.page.scss'],
  standalone: false,
})
export class EncotrarPage implements OnInit {

  constructor(private rota:Router) { }

  ngOnInit() {
  }
voltar() {
  this.rota.navigate(['/amigos'])
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imagens',
  templateUrl: './imagens.page.html',
  styleUrls: ['./imagens.page.scss'],
  standalone: false,
})
export class ImagensPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
curupira() {
  this.route.navigate(['/curupira'])
}

caipora() {
  this.route.navigate(['/caipora'])
}

boitata() {
  this.route.navigate(['/boitata'])
}
}

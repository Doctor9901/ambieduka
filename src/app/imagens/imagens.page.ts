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
  localStorage.setItem('avatar', 'https://th.bing.com/th/id/OIP.GwKvkFOuvg1p44_Tw6e4lwHaEK?rs=1&pid=ImgDetMain');
  this.route.navigate(['/curupira']);
}

caipora() {
  localStorage.setItem('avatar', 'https://th.bing.com/th/id/OIP.TxElwfVun2oHnlnAfieVFQAAAA?rs=1&pid=ImgDetMain');
  this.route.navigate(['/caipora']);
}

boitata() {
  localStorage.setItem('avatar', 'https://contosdetodososcantos.com.br/wp-content/uploads/2023/05/Boitata-uma-das-maiores-lendas-do-folclore-brasileiro.jpg');
  this.route.navigate(['/boitata']);
}
voltar() {
  window.history.back();
}
}

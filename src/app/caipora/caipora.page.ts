import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caipora',
  templateUrl: './caipora.page.html',
  styleUrls: ['./caipora.page.scss'],
  standalone: false,
})
export class CaiporaPage implements OnInit {

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
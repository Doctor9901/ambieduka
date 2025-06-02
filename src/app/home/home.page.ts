import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    
  }


  amigos() {
    this.route.navigate(['/amigos']);
  }

  vidas() {
    this.route.navigate(['/vidas']);
  }

  jogar() {
    this.route.navigate(['/jogar']);
  }
}

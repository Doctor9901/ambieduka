import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogar',
  templateUrl: './jogar.page.html',
  styleUrls: ['./jogar.page.scss'],
  standalone: false,
})
export class JogarPage implements OnInit {

public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Nome:',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Idade:',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'Fale sobre você:',
    },
    {
      type:'email',
      placeholder:'Email:'
    },
    {
      type:'email',
      placeholder:'Confirme Seu Email:'
    },
    {
      type:'password',
      placeholder: 'Password:',
    },
    {
      type: 'password',
      placeholder: 'Confirmar Senha:',
    },
  ];

  constructor(private route:Router) { }

  ngOnInit() {
  }
perguntas() {
  this.route.navigate(['/perguntas'])
}
}

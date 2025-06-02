import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.page.html',
  styleUrls: ['./suporte.page.scss'],
  standalone: false,
})
export class SuportePage implements OnInit {
  formFeedback: FormGroup;

  constructor(
    private route:Router,
    private fb: FormBuilder,
    private toastController: ToastController
  ) { 
    this.formFeedback = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      notificacoes: [false],
      comentario: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  async suporte() {
    if (this.formFeedback.valid) {
      // Aqui você pode enviar o feedback para o backend, se desejar

      // Mostra o toast de sucesso
      const toast = await this.toastController.create({
        message: 'Mensagem enviada com sucesso! O serviço de suporte recebeu sua mensagem com todo carinho e atenção.',
        duration: 3000,
        color: 'success',
        position: 'bottom'
      });
      await toast.present();

      // Limpa o formulário
      this.formFeedback.reset({
        nome: '',
        sobrenome: '',
        notificacoes: false,
        comentario: ''
      });
    }
  }

  voltar() {
    window.history.back();
  }
}

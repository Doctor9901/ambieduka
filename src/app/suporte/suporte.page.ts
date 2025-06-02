import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.page.html',
  styleUrls: ['./suporte.page.scss'],
  standalone: false,
})
export class SuportePage implements OnInit {
  
  constructor(private route:Router) { }

  ngOnInit() {
  }
suporte() {
  this.route.navigate(['/home'])
}
}

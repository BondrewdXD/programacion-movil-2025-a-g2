import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule aquí
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, // Marca el componente como autónomo
  imports: [IonicModule,RouterOutlet,CommonModule],  // Importa IonicModule en el componente
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class HomePage {
  constructor(private router: Router) {}

  cambiarVista(event: any) {
    const ruta = event.detail.value;
    this.router.navigate(['/home', ruta]);
  }
}

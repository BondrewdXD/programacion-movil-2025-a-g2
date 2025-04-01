import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from '../persona/persona.component';

@Component({
  selector: 'app-recepcionista',
  standalone: true,
  templateUrl: './recepcionista.component.html',
  styleUrls: ['./recepcionista.component.scss'],
  imports: [CommonModule,PersonaComponent,ReactiveFormsModule] // Asegúrate de importar ReactiveFormsModule aquí
})
export class RecepcionistaComponent implements OnInit {
  recepcionistaForm: FormGroup;
  recepcionistaList: any[] = []; // Lista de recepcionistas

  constructor(private fb: FormBuilder) {
    this.recepcionistaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      horarioLaboral: ['', Validators.required],  // Campo nuevo
      extensionTelefonica: ['', Validators.required]  // Campo nuevo
    });
  }

  ngOnInit(): void {
    // Elimina la excepción innecesaria
  }
}

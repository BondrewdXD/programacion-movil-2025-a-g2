import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from '../persona/persona.component';

@Component({
  selector: 'app-enfermero',
  templateUrl: './enfermero.component.html',
  styleUrls: ['./enfermero.component.scss'],
  standalone: true,
  imports: [CommonModule, PersonaComponent,ReactiveFormsModule]  // Asegúrate de importar ReactiveFormsModule
})
export class EnfermeroComponent implements OnInit {
  enfermeroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.enfermeroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      turnoAsignado: ['', Validators.required],  // Nuevo campo
      areaAtencion: ['', Validators.required]  // Nuevo campo
    });
  }

  ngOnInit(): void {}

  agregarEnfermero() {
    if (this.enfermeroForm.valid) {
      console.log('Datos del Enfermero:', this.enfermeroForm.value);
      this.enfermeroForm.reset();
    }
  }
}

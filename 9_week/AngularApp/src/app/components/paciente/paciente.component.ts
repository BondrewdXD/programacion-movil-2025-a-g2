import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from '../persona/persona.component';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
  standalone: true,
  imports: [CommonModule,PersonaComponent,ReactiveFormsModule]  // Asegúrate de importar ReactiveFormsModule
})
export class PacienteComponent implements OnInit {
  pacienteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pacienteForm = this.fb.group({
      numeroHistoriaClinica: ['', Validators.required],  // Nuevo campo
      tipoAfiliacion: ['', Validators.required]  // Nuevo campo
    });
  }

  ngOnInit(): void {}
}

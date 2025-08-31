import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from '../persona/persona.component';  // Importa PersonaComponent

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss'],
  standalone: true,
  imports: [CommonModule, PersonaComponent, ReactiveFormsModule]  // Asegúrate de importar ReactiveFormsModule
})
export class MedicoComponent implements OnInit {
  medicoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.medicoForm = this.fb.group({
      especialidad: ['', Validators.required],
      numeroLicencia: ['', Validators.required]
    });
  }

  ngOnInit(): void {}
}

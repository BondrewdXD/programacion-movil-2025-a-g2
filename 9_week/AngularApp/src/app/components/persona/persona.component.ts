import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona',
  standalone: true,
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
  imports: [CommonModule, ReactiveFormsModule] // 👈 Agregar ReactiveFormsModule aquí
})
export class PersonaComponent implements OnInit {

  personalMedicoForm: FormGroup;
  personalList: any[] = []; // Lista de personal médico

  constructor(private fb: FormBuilder) {
    this.personalMedicoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]],
      correoElectronico: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    // Elimina la excepción innecesaria
  }

  agregarPersonal() {
    if (this.personalMedicoForm.valid) {
      this.personalList.push(this.personalMedicoForm.value);
      this.personalMedicoForm.reset(); // Limpia el formulario
    }
  }

  modificarPersonal(index: number) {
    const personal = this.personalList[index];
    this.personalMedicoForm.setValue(personal); // Carga los datos en el formulario
    this.personalList.splice(index, 1); // Elimina el elemento de la lista temporalmente
  }

  eliminarPersonal(index: number) {
    this.personalList.splice(index, 1);
  }

  consultarPersonal() {
    console.log('Lista de Personal Médico:', this.personalList);
  }
}

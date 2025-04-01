  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { HomePageRoutingModule } from './home-routing.module';
  import { PersonaComponent } from "../components/persona/persona.component";
  import { EnfermeroComponent } from '../components/enfermero/enfermero.component';
  import { MedicoComponent } from '../components/medico/medico.component';
  import { PacienteComponent } from '../components/paciente/paciente.component';
  import { RecepcionistaComponent } from '../components/recepcionista/recepcionista.component';
  import { HomePage } from './home.page';  // Asegúrate de importar el componente HomePage como autónomo
  import { RouterModule } from '@angular/router';

  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HomePageRoutingModule,
      PersonaComponent,
      EnfermeroComponent,
      MedicoComponent,
      PacienteComponent,
      RecepcionistaComponent,
      RouterModule,
      HomePage  // Aquí ya importas el componente directamente
    ],
    declarations: []  // No es necesario declarar HomePage
  })
  export class HomePageModule {}

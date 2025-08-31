import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MedicoComponent } from '../components/medico/medico.component';
import { PacienteComponent } from '../components/paciente/paciente.component';
import { EnfermeroComponent } from '../components/enfermero/enfermero.component';
import { RecepcionistaComponent } from '../components/recepcionista/recepcionista.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: 'medico', component: MedicoComponent }, // Aquí estás importando MedicoComponent
      { path: 'paciente', component: PacienteComponent },
      { path: 'enfermero', component: EnfermeroComponent },
      { path: 'recepcionista', component: RecepcionistaComponent },
      { path: '', redirectTo: 'medico', pathMatch: 'full' }, // Redirige por defecto a Médico
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { AsistenciasComponent } from './asistencias.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {
    path: '',
    component: AsistenciasComponent,
    children: [
      {
        path: 'asistencias',
        component: AsistenciaComponent
      },
      {
        path: 'personas',
        component: PersonasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsistenciasRoutingModule { }

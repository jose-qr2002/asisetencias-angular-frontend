import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { PersonasComponent } from './personas/personas.component';
import { AsistenciasComponent } from './asistencias.component';
import { AsistenciasRoutingModule } from './asistencias-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AsistenciasComponent,
    AsistenciaComponent,
    PersonasComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AsistenciasRoutingModule
  ]
})
export class AsistenciasModule { }

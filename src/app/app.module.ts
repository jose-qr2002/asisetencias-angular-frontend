import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonaModalComponent } from './pages/asistencias/personas/persona-modal/persona-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AsistenciaModalComponent } from './pages/asistencias/asistencia/asistencia-modal/asistencia-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonaModalComponent,
    AsistenciaModalComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

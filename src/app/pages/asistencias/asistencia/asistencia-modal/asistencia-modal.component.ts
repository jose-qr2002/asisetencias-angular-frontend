import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AsistenciaService } from 'src/app/providers/services/asistencia.service';
import { PersonaService } from 'src/app/providers/services/persona.service';

@Component({
  selector: 'app-asistencia-modal',
  templateUrl: './asistencia-modal.component.html',
  styleUrls: ['./asistencia-modal.component.css']
})
export class AsistenciaModalComponent implements OnInit {

  @Input() title: any;

  personaId: any;
  // @ts-ignore
  formAsistencia: FormGroup;
  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private asistenciaService: AsistenciaService,
              private personaService: PersonaService) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    const controls = {
      asisTipoControl: ['', [Validators.required]],
      persDni: ['', [Validators.required]]
    }
    this.formAsistencia = this.formBuilder.group(controls);
  };

  save(data: any): void {
    this.personaService.getByDni$(data.persDni).subscribe( response => {
      this.personaId = response.data.persId;
    });
    // Guardar en JSON
    setTimeout(() => {
      let now = new Date();
      // Extraer la hora en formato HH:MM:SS
      let hour = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let horaActual = `${hour}:${minutes}:${seconds}`
      const save: any = {
        asisTipoControl: data.asisTipoControl,
        asisHora: horaActual,
        persona: {
          persId: this.personaId
        }
      }
      setTimeout(() => {
        this.asistenciaService.add$(save).subscribe(response => {
          if (response.success) {
            this.activeModal.close({success: true, message: response.message});
          }
        })
      }, 200);
    }, 300);
    

  }
}

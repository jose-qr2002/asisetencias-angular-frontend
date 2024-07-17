import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaService } from 'src/app/providers/services/persona.service';

@Component({
  selector: 'app-persona-modal',
  templateUrl: './persona-modal.component.html',
  styleUrls: ['./persona-modal.component.css']
})
export class PersonaModalComponent implements OnInit {

  @Input() title: any;
  @Input() item: any;
  @Input() persId: any;

  // @ts-ignore
  formPersona: FormGroup;
  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private personaService: PersonaService) { }

  ngOnInit(): void {
    this.formInit();
    if(this.item) {
      this.updateData();
    }
  }


  formInit(): void {
    const controls = {
      persNombre: ['', [Validators.required]],
      persApellido: ['', [Validators.required]],
      persDni: ['', [Validators.required]],
      persSexo: ['', [Validators.required]],
      persDireccion: ['']
    }
    this.formPersona = this.formBuilder.group(controls);
  };

  save(): void {
    this.personaService.add$(this.formPersona.value).subscribe(response => {
      if (response.success) {
        this.activeModal.close({success: true, message: response.message});
      }
    })
  }

  update(): void {
    this.personaService.update$(this.persId, this.formPersona.value).subscribe(response => {
      if (response.success) {
        this.activeModal.close({success: true, message: response.message});
      }
    })
  }

  updateData(): void {
    this.formPersona.patchValue(this.item)
  }
}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { PersonaService } from '../../../providers/services/persona.service';
import { PersonaModalComponent } from './persona-modal/persona-modal.component';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: any = [];
  constructor(private personaService: PersonaService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getPersonas();
  }


  getPersonas(): void {
    this.personaService.getAll$().subscribe(response => {
      this.personas = response.data || [];
      console.log(this.personas);
    });
  }

  openModal(): void {
    const modal = this.modalService.open(PersonaModalComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static'
    });
    modal.componentInstance.title = 'Nueva';
    modal.result.then(res => {
      if(res.success) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Persona',
          text: res.message,
          showConfirmButton: false,
          timer: 1300
        });
        this.getPersonas();
      }
    }).catch( res => {});
  }

  openModalEdit(item: any): void {
    const modal = this.modalService.open(PersonaModalComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static'
    });
    modal.componentInstance.title = 'Modificar';
    modal.componentInstance.item = item;
    modal.componentInstance.persId = item.persId;
    modal.result.then(res => {
      if(res.success) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Persona',
          text: res.message,
          showConfirmButton: false,
          timer: 1300
        });
        this.getPersonas();
      }
    }).catch( res => {});
  }

  onDelete(item: any): void {
    const ID = item.persId;
    const mensaje = '¿ Desea eliminar? : ' + ' ' + item.persNombre;
    if (ID) {
      Swal.fire({
        title: 'Se eliminará el registro',
        text: `${mensaje}`,
        backdrop: true,
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#2645df',
        confirmButtonText: 'Estoy de acuerdo!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          this.personaService.delete$(ID).subscribe(data => {
            if (data.success) {
              Swal.fire({
                title: 'Eliminado',
                text: data.message,
                icon: 'success',
                backdrop: true,
                showConfirmButton: false,
                confirmButtonColor: '#7f264a',
                timer: 1300,
              });
              this.getPersonas();
            }
          });
        }
      });
    }
  }
}


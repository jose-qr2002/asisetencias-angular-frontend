import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AsistenciaService } from '../../../providers/services/asistencia.service';
import { AsistenciaModalComponent } from './asistencia-modal/asistencia-modal.component';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  asistencias: any = [];
  constructor(private asistenciaService: AsistenciaService,
              private modalService: NgbModal) { }
  
  ngOnInit(): void {
    this.getAsistencias();
  }

  getAsistencias(): void {
    this.asistenciaService.getAll$().subscribe(response => {
      this.asistencias = response.data || [];
      console.log(this.asistencias);
    });
  }

  openModal(): void {
    const modal = this.modalService.open(AsistenciaModalComponent, {
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
        this.getAsistencias();
      }
    }).catch( res => {});
  }
}

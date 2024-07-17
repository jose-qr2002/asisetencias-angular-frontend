import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { END_POINTS } from '../utils/end-points';
import { EntityDataService } from '../utils/entity-data.service';
import { IResponse } from '../utils/response';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService extends EntityDataService<IResponse>{

  constructor(protected httpClient: HttpClient) { 
    super(httpClient, END_POINTS.api+END_POINTS.asistencias.asistencia)
  }
}

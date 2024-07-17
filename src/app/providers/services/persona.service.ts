import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { END_POINTS } from '../utils/end-points';
import { EntityDataService } from '../utils/entity-data.service';
import { IResponse } from '../utils/response';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends EntityDataService<IResponse>{

  constructor(protected httpClient: HttpClient) { 
    super(httpClient, END_POINTS.api+END_POINTS.asistencias.persona)
  }

  public getByDni$(dni: string): Observable<IResponse> {
    return this.httpClient.get<IResponse>(`${this.endPoint}/dni/${dni}/`);
  }
}

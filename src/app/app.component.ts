import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asistencia';
  productos: any = [{nombre: "Arroz"}, {nombre: "Aceite"}, {nombre: "Fideos"}]
}

import { Component } from '@angular/core';
import{ estudiante } from '../../models/students.model'

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.css']
})
export class ListaEstudianteComponent {
estudiantes:estudiante[]= [
  new estudiante('andreina','marcano',new Date(),27),
  new estudiante('andreina2','marcano2',new Date(),29)
  
]
}
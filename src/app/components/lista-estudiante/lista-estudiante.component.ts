import { Component } from '@angular/core';
import{ estudiante } from '../../models/students.model'

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.css']
})
export class ListaEstudianteComponent {
estudiantes:estudiante[]= [
  new estudiante(1,'andre','marcano',27),
  new estudiante(2,'sandra','martinez',28),
  new estudiante(3,'alonso','cordoba',29)
  
]
}
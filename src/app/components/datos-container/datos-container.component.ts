import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contenedor } from 'src/app/classes/container';

@Component({
  selector: 'app-datos-container',
  templateUrl: './datos-container.component.html',
  styleUrls: ['./datos-container.component.scss'],
})
export class DatosContainerComponent implements OnInit {
  @Output() newContainer: EventEmitter<any> = new EventEmitter<any>();
  nuevoContainer: Contenedor = {
    codigo: '',
    marca: '',
    capacidad: 0,
    stock: [],
  };
  constructor() {}

  ngOnInit(): void {}

  crearContainer() {
    let instancia: any = {
      marca: this.nuevoContainer.marca,
      capacidad: this.nuevoContainer.capacidad,
    };
    this.newContainer.emit(instancia);
  }
}

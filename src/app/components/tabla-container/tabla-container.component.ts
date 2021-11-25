import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contenedor } from 'src/app/classes/container';

@Component({
  selector: 'app-tabla-container',
  templateUrl: './tabla-container.component.html',
  styleUrls: ['./tabla-container.component.scss'],
})
export class TablaContainerComponent implements OnInit {
  @Input() containers?: Contenedor[];
  @Output() containerSelected: EventEmitter<Contenedor> =
    new EventEmitter<Contenedor>();

  constructor() {}

  ngOnInit(): void {}

  selectContenedor(contenedor: Contenedor) {
    this.containerSelected?.emit(contenedor);
  }
}

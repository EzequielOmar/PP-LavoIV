import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contenedor } from 'src/app/classes/container';

@Component({
  selector: 'app-modif-container',
  templateUrl: './modif-container.component.html',
  styleUrls: ['./modif-container.component.scss'],
})
export class ModifContainerComponent implements OnInit {
  @Input() modifContainer!: Contenedor;
  @Output() containerMofif: EventEmitter<Contenedor> =
    new EventEmitter<Contenedor>();

  constructor() {}

  ngOnInit(): void {}

  modificarContainer() {
    this.containerMofif.emit(this.modifContainer);
  }
}

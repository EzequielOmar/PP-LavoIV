import { Component, Input, OnInit } from '@angular/core';
import { Contenedor, dbName_Containers } from 'src/app/classes/container';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-borrar-container',
  templateUrl: './borrar-container.component.html',
  styleUrls: ['./borrar-container.component.scss'],
})
export class BorrarContainerComponent implements OnInit {
  @Input() container!: Contenedor;

  constructor(private db: DbService) {}

  ngOnInit(): void {}

  deleteContainer() {
    this.db.delete(dbName_Containers, this.container.codigo);
  }
}

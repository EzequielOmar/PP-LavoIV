import { Component, OnInit } from '@angular/core';
import { Contenedor, dbName_Containers } from 'src/app/classes/container';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-abm-container',
  templateUrl: './abm-container.component.html',
  styleUrls: ['./abm-container.component.scss'],
})
export class AbmContainerComponent implements OnInit {
  containers: Contenedor[] = [];
  containerSelected!: Contenedor;
  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.getContainers();
  }

  newContainer(container: Contenedor) {
    this.db.set(dbName_Containers, container);
  }

  selectContainer(container: Contenedor) {
    this.containerSelected = container;
  }

  modifContainer(container: Contenedor) {
    let { marca, capacidad } = container;
    let c: any = { marca: marca, capacidad: capacidad };
    this.db.setWithId(dbName_Containers, container.codigo, c);
  }

  private getContainers() {
    this.db.getObserver(dbName_Containers).onSnapshot((snap) => {
      this.containers = [];
      snap.forEach((doc) => {
        let { marca, capacidad, stock } = doc.data() as Contenedor;
        let c: Contenedor = {
          codigo: doc.id,
          marca: marca,
          capacidad: capacidad,
          stock: stock,
        };
        this.containers.push(c);
      });
    });
  }
}

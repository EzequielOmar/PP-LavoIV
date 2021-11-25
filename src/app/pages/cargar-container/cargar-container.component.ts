import { Component, OnInit } from '@angular/core';
import { Contenedor, dbName_Containers } from 'src/app/classes/container';
import { dbName_Productos, Producto } from 'src/app/classes/producto';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-cargar-container',
  templateUrl: './cargar-container.component.html',
  styleUrls: ['./cargar-container.component.scss'],
})
export class CargarContainerComponent implements OnInit {
  containers: Contenedor[] = [];
  productos: Producto[] = [];
  containerSelected!: Contenedor;
  productSelected?: Producto;
  cargar: number = 0;
  //mensajes
  error?: string = '';
  succes?: boolean = false;

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getContainers();
  }

  selectContainer(container: Contenedor) {
    this.containerSelected = container;
  }

  selectProduct(producto: Producto) {
    this.productSelected = producto;
  }

  cargarStock() {
    if (this.cargar && this.chequearCapacidad()) {
      this.actualizarDatos();
      this.succes = true;
      setTimeout(() => {
        this.succes = false;
      }, 3000);
    }
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

  private getProducts = async () => {
    await this.db
      .getObserver(dbName_Productos)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          this.productos.push({
            codigo: doc.id,
            producto: doc.data(),
          } as Producto);
        });
      });
  };

  private chequearCapacidad() {
    if (
      this.productSelected?.producto.stock &&
      this.cargar > this.productSelected?.producto.stock
    ) {
      this.error = '**No hay stock suficiente**';
      return false;
    }
    if (
      this.cargar + this.containerSelected?.stock.length >
      this.containerSelected.capacidad
    ) {
      this.error = '**El container llegó a su maximo de capacidad**';
      return false;
    }
    return true;
  }

  private actualizarDatos() {
    if (this.productSelected?.producto.stock)
      this.productSelected.producto.stock =
        this.productSelected?.producto.stock - this.cargar;
    let p: Producto = {
      codigo: this.productSelected?.codigo ?? '',
      producto: {
        nombre: this.productSelected?.producto.nombre ?? '',
        descripcion: this.productSelected?.producto.descripcion ?? '',
        precio: this.productSelected?.producto.precio ?? '',
        stock: this.cargar,
        pais: this.productSelected?.producto.pais ?? '',
        comestible: this.productSelected?.producto.comestible ?? false,
      },
    };
    this.containerSelected.stock.push(p);
    this.db.setWithId(
      dbName_Productos,
      this.productSelected?.codigo ?? '',
      this.productSelected?.producto
    );
    this.db.setWithId(
      dbName_Containers,
      this.containerSelected.codigo,
      this.containerSelected
    );
  }
}

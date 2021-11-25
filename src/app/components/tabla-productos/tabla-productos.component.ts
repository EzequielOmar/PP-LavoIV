import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/classes/producto';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss'],
})
export class TablaProductosComponent {
  @Input() productos!: Array<Producto>;
  @Output() productoSelected: EventEmitter<Producto> =
    new EventEmitter<Producto>();
  producto?: Producto;

  constructor() {}

  selectProducto(producto: Producto) {
    this.producto = producto;
    this.productoSelected?.emit(producto);
  }
}

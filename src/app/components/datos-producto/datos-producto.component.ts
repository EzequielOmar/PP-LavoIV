import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/classes/producto';

@Component({
  selector: 'app-datos-producto',
  templateUrl: './datos-producto.component.html',
  styleUrls: ['./datos-producto.component.scss'],
})
export class DatosProductoComponent implements OnInit {
  @Input() producto?: Producto;

  constructor() {}

  ngOnInit(): void {}
}

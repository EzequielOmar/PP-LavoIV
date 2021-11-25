import { Component, OnInit } from '@angular/core';
import { Country, dbName_Countries } from 'src/app/classes/pais';
import { dbName_Productos, Producto } from 'src/app/classes/producto';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
})
export class DetalleProductoComponent implements OnInit {
  productos: Producto[] = [];
  productSelected?: Producto;
  countryOfProduct?: Country;
  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  selectProduct(producto: Producto) {
    this.productSelected = producto;
    this.getCountry(this.productSelected.producto.pais);
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

  private getCountry = async (country: string) => {
    await this.db
      .getObserver(dbName_Countries)
      .doc(country)
      .get()
      .then((doc) => {
        let { continente, img_code } = doc.data() as Country;
        let c: Country = {
          nombre: doc.id,
          continente: continente,
          img_code: img_code,
        };
        this.countryOfProduct = c;
      });
  };
}

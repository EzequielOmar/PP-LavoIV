import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dbName_Productos, Producto } from '../clases/producto';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.scss'],
})
export class AltaProductoComponent {
  form: FormGroup;
  sended: Boolean = false;
  spinner: Boolean = false;
  respuesta: string = '';
  constructor(private fb: FormBuilder, private db: DbService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      pais: ['', Validators.required],
      comestible: [''],
    });
  }

  send() {
    this.sended = true;
    if (this.form.valid) {
      this.spinner = true;
      this.db
        .set(dbName_Productos, this.form.value)
        .then(() => {
          this.showResponse('Cargado correctamente');
        })
        .catch((error: any) => {
          this.showResponse(error);
        })
        .finally(() => {
          this.spinner = false;
        });
    }
  }

  private showResponse(text: string) {
    this.respuesta = text;
    setTimeout(() => {
      this.respuesta = '';
    }, 3000);
  }
}

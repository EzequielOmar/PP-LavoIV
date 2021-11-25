import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country, dbName_Countries } from 'src/app/classes/pais';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss'],
})
export class TablaPaisesComponent {
  countries: Array<Country> = [];

  @Output() countrySelected: EventEmitter<Country> =
    new EventEmitter<Country>();

  @Input() set continentFilter(value: string) {
    if (value) {
      this.getCountries(value);
    }
  }

  constructor(private db: DbService) {}

  selectCountry(country: Country) {
    this.countrySelected?.emit(country);
  }

  private getCountries(continentFilter: string) {
    this.db.getObserver(dbName_Countries).onSnapshot((snap: any) => {
      this.countries = [];
      snap.forEach((child: any) => {
        let { continente, img_code } = child.data();
        let c: Country = {
          nombre: child.id,
          continente: continente,
          img_code: img_code,
        };
        if (continente === continentFilter) this.countries.push(c);
      });
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Country } from '.././../classes/pais';

@Component({
  selector: 'app-datos-pais',
  templateUrl: './datos-pais.component.html',
  styleUrls: ['./datos-pais.component.scss'],
})
export class DatosPaisComponent implements OnInit {
  @Input() pais?: Country;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { async } from '@firebase/util';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss'],
})
export class BienvenidaComponent implements OnInit {
  data: any = [];

  constructor() {
    this.getData().then(() => {
      console.log(this.data);
    });
  }

  ngOnInit(): void {}

  getData = async () => {
    this.data = await (await fetch('https://api.github.com/users/EzequielOmar')).json();

  };
}

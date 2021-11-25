import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  user: any = null;
  constructor(private router: Router, private auth: AuthService) {
    this.auth.currentUser.subscribe((user) => {
      if (user) this.user = user;
      else this.user = null;
    });
  }

  ngOnInit(): void {}

  goLogin() {
    this.router.navigate(['login']);
  }

  gotoAltaProducto() {
    this.router.navigate(['producto/alta']);
  }

  gotoDetalleProducto() {
    this.router.navigate(['producto/detalle']);
  }

  gotoAbmContainer() {
    this.router.navigate(['container/abm']);
  }

  logOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['home']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  spinner = false;
  error = '';
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  logIn() {
    this.submitted = true;
    if (this.form.valid) {
      this.spinner = true;
      this.auth
        .signIn(
          this.form.controls['email'].value,
          this.form.controls['pass'].value
        )
        .then((res: any) => {
          this.router.navigate(['home']);
        })
        .catch((error) => (this.error = error))
        .finally(() => {
          this.spinner = false;
        });
    }
  }

  fillForm(tipo: string) {
    if (tipo === 'admin') {
      this.form.controls['email'].setValue('administrador@administrador.com');
      this.form.controls['pass'].setValue('administrador');
    } else {
      this.form.controls['email'].setValue('empleado@empleado.com');
      this.form.controls['pass'].setValue('empleado');
    }
  }
}

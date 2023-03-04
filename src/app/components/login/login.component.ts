import { AuthenticationResponse } from './../../models/AuthenticationReponse';
import { AuthenticationRequest } from './../../models/AuthenticationRequest';
import { Component } from '@angular/core';
import { HtmlTagDefinition } from '@angular/compiler';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  jwt: string = '';

  constructor(private api: ApiService, private router: Router) {}

  user: AuthenticationRequest = {
    email: '',
    password: '',
  };

  logIn() {
    this.api.authenticate(this.user).subscribe(
      (response: any) => {
        this.jwt = response.token;
        localStorage.setItem('token', response.token);
        this, this.router.navigate(['home']);
      },
      (error) => console.log('Ocurrio un error')
    );
  }
}

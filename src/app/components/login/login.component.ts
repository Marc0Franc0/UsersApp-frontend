import { JwtService } from './../../services/jwt.service';
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

  constructor(
    private api: ApiService,
    private router: Router,
    private jwtService: JwtService
  ) {}

  user: AuthenticationRequest = {
    email: '',
    password: '',
  };

  logIn() {
    this.api.authenticate(this.user).subscribe(
      (response: any) => {
        this.jwt = response.token;

        this.saveToken(response.token);
        this.saveEmail(this.user.email);
        this, this.router.navigate(['home']);
      },(error) => alert("Error al iniciar sesión"));
  }

  saveToken(token: string) {
    if (this.jwtService.getToken()) {
      localStorage.removeItem('token');
      localStorage.setItem('token', token);
    } else {
      localStorage.setItem('token', token);
    }
  }

  saveEmail(email: string) {
    if (this.api.getEmail()) {
      localStorage.removeItem('Email');
      localStorage.setItem('Email', email);
    } else {
      localStorage.setItem('Email', email);
    }
  }
}

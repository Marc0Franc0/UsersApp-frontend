import { Router } from '@angular/router';
import { JwtService } from './../../services/jwt.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  admin: any = false;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private jwtService: JwtService,
    private router: Router
  ) {}

ngOnInit(){
  this.isAdmin();
}

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  isAdmin() {
    let email = this.api.getEmail();

    this.api.isAdmin(email!).subscribe((response) => {
      this.admin = response;
    });
  }
}

import { Router } from '@angular/router';
import { JwtService } from './../../services/jwt.service';
import { Contact } from 'src/app/models/Contact';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private fb:FormBuilder, private api:ApiService, private jwtService:JwtService, private router:Router){

  }

logOut(){
localStorage.removeItem('token');
this.router.navigate(['/']);
}

}

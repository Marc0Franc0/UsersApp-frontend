import { ApiService } from 'src/app/services/api.service';
import { User } from './models/User';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contactos-frontend';
constructor(private api:ApiService){}
ngOnInit(){
  this.api.createUserAdmin().subscribe();
}
}

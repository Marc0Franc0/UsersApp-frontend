import { Component } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

constructor(private api:ApiService){}
contacts?:Contact[];

ngOnInit(){
this.api.getAllContacts().subscribe((response)=>{
  this.contacts=response;
})
}

 modifyContact(){
    console.log("editar")
  }


}

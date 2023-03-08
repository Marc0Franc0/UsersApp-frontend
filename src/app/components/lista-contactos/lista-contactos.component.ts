import { Component } from '@angular/core';
import { find } from 'rxjs';
import { Contact } from 'src/app/models/Contact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css'],
})
export class ListaContactosComponent {
  constructor(private api: ApiService) {}
  contacts?: Contact[];
  idContactStored?: number;

  contactStored: Contact = {
    id:0,
    full_name: '',
    birthdate: '',
    email: '',
    cell_phone: '',
  };

  ngOnInit() {
    //Get list of contacts
    this.api.getAllContacts().subscribe((response) => {
      this.contacts = response;
    });
  }

  inicializarContacto(id:number) {
   let contact = this.contacts?.find((contact)=>{
    return contact.id === id
   })
this.idContactStored=id;
   this.contactStored= contact!;

  }
}

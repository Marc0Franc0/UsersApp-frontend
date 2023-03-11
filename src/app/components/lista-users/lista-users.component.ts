import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.css']
})
export class ListaUsersComponent {
  constructor(private api: ApiService) {}
  users?: User[];
  idUserStored?: number;
  admin:any=false;
 userStored: User = {
    id:0,
    email: '',
    firstname:'',
    lastname:''

  };
  ngOnInit() {
    //Get list of contacts
    this.api.getAllContacts().subscribe((response) => {
      this.users = response;
    });

    this.isAdmin();
  }

  inicializarUser(id:number){
    let user = this.users?.find((user)=>{
      return user.id === id
     })
  this.idUserStored=id;
     this.userStored= user!;
  }

  isAdmin(){
    let email=this.api.getEmail();

    this.api.isAdmin(email!).subscribe((response)=>{
     this.admin=response;
    })
  }
}

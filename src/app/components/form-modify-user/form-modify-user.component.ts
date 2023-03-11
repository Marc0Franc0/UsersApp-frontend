import { User } from './../../models/User';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-modify-user',
  templateUrl: './form-modify-user.component.html',
  styleUrls: ['./form-modify-user.component.css']
})
export class FormModifyUserComponent {
  @Input()userStored?: User;
  @Input()idUserStored?:number;
  constructor(private fb:FormBuilder, private api:ApiService){

  }
  get firstname(){
    return this.formUser.get('firstname');
  }
  get lastname(){
    return this.formUser.get('lastname');
  }
  get email(){
    return this.formUser.get('email');
  }

  formUser=this.fb.group({
    'firstname':[''],
    'lastname':[''],
    'email':['',Validators.required],
  });

  user:User={

    id:0,
    firstname:'',
    lastname:'',
    email:"",
  }

  onSubmit(){
    this.user={
      id:this.idUserStored!,
      firstname:this.formUser.value.firstname!,
      lastname:this.formUser.value.lastname!,
      email:this.formUser.value.email!,
    }
  this.api.modifyUser(this.user.id,this.user).subscribe((response)=>{
  console.log(response);
  location.reload();
  },error=>console.log(error));
  }
}

import { Contact } from 'src/app/models/Contact';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-modify-contact',
  templateUrl: './form-modify-contact.component.html',
  styleUrls: ['./form-modify-contact.component.css']
})
export class FormModifyContactComponent {

  constructor(private fb:FormBuilder, private api:ApiService){

  }


@Input()contactStored?: Contact;
@Input()idContactStored?:number;

get full_name(){
  return this.formContact.get('full_name');
}
get birthdate(){
  return this.formContact.get('birthdate');
}
get cell_phone(){
  return this.formContact.get('cell_phone');
}
get email(){
  return this.formContact.get('email');
}

formContact=this.fb.group({
  'full_name':['',Validators.required],
  'birthdate':[''],
  'cell_phone':['',Validators.required],
  'email':['',Validators.required],
});

contact:Contact={
  id:0,
  full_name:"",
  birthdate:"",
  cell_phone:"",
  email:"",
}

onSubmit(){
  this.contact={
    id:this.idContactStored!,
    full_name:this.formContact.value.full_name!,
    birthdate:this.formContact.value.birthdate!,
    cell_phone:this.formContact.value.cell_phone!,
    email:this.formContact.value.email!,
  }
this.api.modifycontact(this.contact.id,this.contact).subscribe((response)=>{
console.log(response);
location.reload();
},error=>console.log(error));
}
}

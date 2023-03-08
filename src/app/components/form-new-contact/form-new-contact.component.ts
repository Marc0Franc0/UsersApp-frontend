import { Component } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-form-new-contact',
  templateUrl: './form-new-contact.component.html',
  styleUrls: ['./form-new-contact.component.css']
})
export class FormNewContactComponent {

constructor(private fb:FormBuilder, private api:ApiService){

}

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
  'birthdate':['',Validators.required],
  'cell_phone':['',Validators.required],
  'email':['',Validators.required]
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
    id:0,
    full_name:this.formContact.value.full_name!,
    birthdate:this.formContact.value.birthdate!,
    cell_phone:this.formContact.value.cell_phone!,
    email:this.formContact.value.email!,
  }
this.api.newContact(this.contact).subscribe((response)=>{
console.log(response);
location.reload();
},error=>console.log("Ocurrio un error"))
}
}

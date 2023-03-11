import { RegisterRequest } from './../models/RegisterRequest';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/User';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form-new-user',
  templateUrl: './form-new-user.component.html',
  styleUrls: ['./form-new-user.component.css'],
})
export class FormNewUserComponent {
  constructor(private fb: FormBuilder, private api: ApiService) {}

  get firstname() {
    return this.formContact.get('firstname');
  }
  get lastname() {
    return this.formContact.get('lastname');
  }
  get password() {
    return this.formContact.get('password');
  }
  get email() {
    return this.formContact.get('email');
  }

  formContact = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
  });

  user: RegisterRequest = {
    firstname: '',
    lastname: '',
    password: '',
    email: '',
  };
  onSubmit() {
    this.user = {
      firstname: this.formContact.value.firstname!,
      password: this.formContact.value.password!,
      lastname: this.formContact.value.lastname!,
      email: this.formContact.value.email!,
    };
    this.api.newUser(this.user).subscribe(
      (response) => {
        console.log(response);
        location.reload();
      },
      (error) => console.log('Ocurrio un error')
    );
  }
}

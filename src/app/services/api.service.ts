import { RegisterRequest } from './../models/RegisterRequest';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../models/AuthenticationReponse';
import { AuthenticationRequest } from '../models/AuthenticationRequest';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  pathBackend='http://localhost:8080'
  getAllContacts(): Observable<User[]> {
   return this.http.get<User[]>(`${this.pathBackend}/`);
  }
  getUser(id:number): Observable<User> {
    return this.http.get<User>(`${this.pathBackend}/`+id);
   }
  authenticate(auth:AuthenticationRequest){
    return this.http.post(`${this.pathBackend}/api/auth/authenticate`,auth);
   }
   newUser(user:RegisterRequest){
    return this.http.post(`${this.pathBackend}/api/auth/register`,user);
   }

   modifyUser(id:number,contact:User){
    return this.http.put(`${this.pathBackend}/`+id,contact,{responseType:'text'});
   }

   isAdmin(email:string){
    return this.http.get(`${this.pathBackend}/rol/`+email);
   }

   getEmail(){
    return localStorage.getItem('Email');
   }

   createUserAdmin(){
    return this.http.get(`${this.pathBackend}/api/auth/createadmin`);
   }
}

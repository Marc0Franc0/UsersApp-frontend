import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../models/AuthenticationReponse';
import { AuthenticationRequest } from '../models/AuthenticationRequest';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  pathBackend='http://localhost:8080'
  getAllContacts(): Observable<Contact[]> {
   return this.http.get<Contact[]>(`${this.pathBackend}/contacts/`);
  }
  getContact(id:number): Observable<Contact> {
    return this.http.get<Contact>(`${this.pathBackend}/contacts/`+id);
   }
  authenticate(auth:AuthenticationRequest){
    return this.http.post(`${this.pathBackend}/api/auth/authenticate`,auth);
   }
   newContact(contact:Contact){
    return this.http.post(`${this.pathBackend}/contacts/new`,contact,{responseType:'text'});
   }
   modifycontact(id:number,contact:Contact){
    return this.http.put(`${this.pathBackend}/contacts/`+id,contact,{responseType:'text'});
   }
}

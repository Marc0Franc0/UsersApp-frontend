import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}

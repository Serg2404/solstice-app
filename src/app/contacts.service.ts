import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactsUrl = "https://s3.amazonaws.com/technical-challenge/v3/contacts.json"
  getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.contactsUrl);

  }
  constructor(private http:HttpClient) { }
}

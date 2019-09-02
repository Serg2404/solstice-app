import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service'
import * as $ from 'jquery';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.getContacts();
  }

  onSelect(contact: Contact): void{
    this.selectedContact = contact;
    $(".contact-details").css("visibility", "visible")
    $(".contacts").css("display", "none")
    window.scrollTo(0,0)
  }

  getContacts(): void{
    this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }
}

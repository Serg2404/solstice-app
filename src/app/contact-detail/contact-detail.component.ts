import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact
  constructor() { }

  ngOnInit() {
  }

  backToContacts(): void{
   $(".contact-details").css("visibility", "hidden")
   $(".contacts").css("display", "block")
  }
  toggleFavorite(contact): void{
    if(contact.isFavorite){
      contact.isFavorite = false
    }
    else{
      contact.isFavorite = true
    }
    debugger
  }
}

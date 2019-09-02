import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ContactsComponent } from './contacts/contacts.component';

import { FormsModule } from '@angular/forms';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

import { HttpClientModule }    from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OnErrorDirective } from './on-error.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ContactsComponent,
    ContactDetailComponent,
    OnErrorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

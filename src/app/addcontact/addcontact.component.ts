import { Component } from '@angular/core';
import {ClientModel} from "../models/client.model";
import {ContactModel} from "../models/contact.model";
import {ContactService} from "../services/contact.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MetierModel} from "../models/metier.model";
import {Router} from "@angular/router";
import {CiviliteModel} from "../models/civilite.model";
import {FonModel} from "../models/fon.model";

@Component({
  selector: 'app-addcontact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './addcontact.component.html',
  styleUrl: './addcontact.component.css'
})
export class AddcontactComponent {
  newContact = new ContactModel();
  fon!: FonModel[];
  newMetier!: MetierModel;
  newMetierId!: number;
  clients!: ClientModel[];
  newClient!: ClientModel;
  newClietnId!: number;
  civilites!:CiviliteModel[];
  newcivilite!: CiviliteModel;
  newCiviliteId!: number;


  constructor(private contactService: ContactService, private router: Router) {

    contactService.ClientList().subscribe(
      c => {
      this.clients = c;
    })
    contactService.CommeList().subscribe(
      f => {
      this.fon = f;
    })
    contactService.CiviliteList().subscribe(
      i=>{
      this.civilites= i;
    })
  }

  addContact() {
    this.newContact.metier = this.fon.find(f=>f.id==this.newMetierId);
    this.newContact.client = this.clients.find(c=>c.idClient== this.newClietnId);
    this.newContact.civilite = this.civilites.find(i=>i.id == this.newCiviliteId);
    this.contactService.save(this.newContact).subscribe(()=>
    {
      this.router.navigate(['admin/contacts']);
    })

  }


}

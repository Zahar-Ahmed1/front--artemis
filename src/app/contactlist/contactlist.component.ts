import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ClientModel} from "../models/client.model";
import {ClientService} from "../services/client.service";
import {ContactModel} from "../models/contact.model";
import {ContactService} from "../services/contact.service";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MetierModel} from "../models/metier.model"
import {CiviliteModel} from "../models/civilite.model";
import {FonModel} from "../models/fon.model";

@Component({
  selector: 'app-contactlist',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    FormsModule
  ],
  templateUrl: './contactlist.component.html',
  styleUrl: './contactlist.component.css'
})
export class ContactlistComponent  implements  OnInit{
  contacts : ContactModel[] = [];
  clients!: ClientModel[];
  civilites!: CiviliteModel[];
  met!: FonModel[];


  keywordPrenom : any = "";
  keyword : any = ""
  keywordClient: any = "";
  keywordFonction: any;

  constructor(private contactService:ContactService) {
    this.contactService.CommeList().subscribe(g=>{
      this.met = g;
      console.log(g)
    })
    this.contactService.ClientList().subscribe(l=>{
      this.clients  = l;
    })
    this.contactService.CiviliteList().subscribe(i=>{
      this.civilites = i;
    })

  }
  ngOnInit() {
    //this.clients = this.contactService.ClientList();
    this.contactService.ContactList().subscribe((c=>{
      this.contacts = c;
    }))
  }

  DeleteContact( contact : ContactModel){
    let message = confirm("are you sure?");
    if(message)
      this.contactService.deleteContact(contact.id!).subscribe(()=>{
        this.loadContact()
      });
  }



  chercherNom() {
    this.contacts = this.contacts.filter((c:any)=>c.nom.includes(this.keyword))
  }
  chercherPrenom() {
    this.contacts = this.contacts.filter((c:any)=>c.prenom.includes(this.keywordPrenom))
  }
  chercherClient() {
    this.contacts = this.contacts.filter(c => c.client?.nom?.includes(this.keywordClient))
  }
  chercherFonction() {
    this.contacts = this.contacts.filter(f=>f.metier?.name.includes(this.keywordFonction))
  }


  loadContact(){
    this.contactService.ContactList().subscribe(p=>{
        this.contacts = p;
      }
    )
  }


}

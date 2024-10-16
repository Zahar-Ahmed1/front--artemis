import {Component, OnInit} from '@angular/core';
import {ClientModel} from "../models/client.model";
import {ClientService} from "../services/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactModel} from "../models/contact.model";
import {ContactService} from "../services/contact.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MetierModel} from "../models/metier.model";
import {NgForOf} from "@angular/common";
import {CiviliteModel} from "../models/civilite.model";
import {FonModel} from "../models/fon.model";

@Component({
  selector: 'app-edite-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './edite-contact.component.html',
  styleUrl: './edite-contact.component.css'
})
export class EditeContactComponent implements OnInit{
  currentCContact = new ContactModel();
  contacts!:ContactModel;
  metiers! :FonModel[];
  newMetier! : MetierModel;
  newMetierId!  : number;
  clients! : ClientModel[];
  newClientId!:number
  civilites!:CiviliteModel[];
  newcivilite!: CiviliteModel;
  newCiviliteId!: number;




  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute, private router : Router) {}

  ngOnInit() {

    this.contactService.CommeList().subscribe(m=>{
      this.metiers = m;
    })
    this.contactService.ClientList().subscribe(c=>{
      this.clients = c;
    })
    this.contactService.CiviliteList().subscribe(v=>{
      this.civilites = v;
    })

    // console.log(this.activatedRoute.snapshot.params['id']);
    this.contactService.editeContact(this.activatedRoute.snapshot.params['id']).subscribe(i=>{
      this.currentCContact = i;

      this.newClientId = this.currentCContact.client?.idClient!;
      this.newMetierId = this.currentCContact.metier?.id!;
      this.newCiviliteId = this.currentCContact.civilite?.id!;


    })
  }

  updateContact(){
    this.currentCContact.metier = this.metiers.find(o=>o.id==this.newMetierId);
    this.currentCContact.client = this.clients.find(s=>s.idClient==this.newClientId);
    this.currentCContact.civilite = this.civilites.find(c=>c.id == this.newCiviliteId);
    this.contactService.updateContact(this.currentCContact).subscribe(u=>{
      this.router.navigate(['admin/contacts']);
    })
  }

}

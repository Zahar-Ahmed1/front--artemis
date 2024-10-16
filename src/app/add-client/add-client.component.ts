import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ClientModel} from "../models/client.model";
import {ClientService} from "../services/client.service";

import {PaysModel} from "../models/pays.model";
import {NgForOf} from "@angular/common";
import {ContactModel} from "../models/contact.model";
import {CommercialeModel} from "../models/commerciale.model";
import {Router} from "@angular/router";
import {VilleModel} from "../models/ville.model";
import {StatutModel} from "../models/statut.model";

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {
  newClient = new ClientModel();
  lPays!: PaysModel[];
  newPays! : PaysModel;
  newPaysId!  : number;
  commerciales! : CommercialeModel[];
  newCommerciale! : CommercialeModel;
  newCommercialeId ! : number;
  villes! : VilleModel[];
  newVille! : VilleModel;
  newVilleId ! : number;
  statuts! : StatutModel[];
  newStatut! : StatutModel;
  newStatutId ! : number;

  constructor(private clientService:ClientService, private router:Router) {
    //this.lPays = clientService.PaysList();
   // this.commerciales = clientService.CommercialeList();
    clientService.PaysList().subscribe(c =>{
      this.lPays = c;
    })
    clientService.CommercialeList().subscribe(
      l=>{
        this.commerciales = l;
      }
    )
    clientService.VilleList().subscribe(
      i =>{
        this.villes = i;
      }
    )
    clientService.StatutList().subscribe(
      m=>{
        this.statuts = m;
      }
    )
  }
  addClient(){
    this.newClient.pays = this.lPays.find(f=>f.idPays==this.newPaysId);
    this.newClient.commerciale = this.commerciales.find(c=>c.id== this.newCommercialeId);
    this.newClient.statut = this.statuts.find(e=>e.id==this.newStatutId);
    this.newClient.ville = this.villes.find(o=>o.id== this.newVilleId);
    this.clientService.addClient(this.newClient).subscribe
    (()=>{
      this.router.navigate(["admin/clients"])
    })



  }

}

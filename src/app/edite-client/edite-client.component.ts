import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../models/client.model';
import { ClientService } from '../services/client.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {Router} from "@angular/router";

import {PaysModel} from "../models/pays.model";
import {NgForOf} from "@angular/common";
import {CommercialeModel} from "../models/commerciale.model";
import {StatutModel} from "../models/statut.model";
import {VilleModel} from "../models/ville.model";

@Component({
  selector: 'app-edite-client',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './edite-client.component.html',
  styleUrl: './edite-client.component.css'
})
export class EditeClientComponent implements OnInit {

  public currentClient = new ClientModel();
  lpays! : PaysModel[];
  newPays! : PaysModel;
  newPaysId!  : number;
  Commerciales! : CommercialeModel[];
  newCommerciale! : PaysModel;
  newCommercialeId! : number;
  status! : StatutModel[];
  newStatus! : StatutModel;
  newStatusId! : number;
  villes!: VilleModel[];
  newVille!: VilleModel;
  newVilleId!: number

  constructor(private clientService: ClientService, private activatedRoute: ActivatedRoute, private router : Router) {}

  ngOnInit() {
    this.clientService.PaysList().subscribe(p=>{
      this.lpays = p;
    })
    this.clientService.CommercialeList().subscribe(c=>{
      this.Commerciales = c;
    })
    this.clientService.StatutList().subscribe(s=>{
      this.status = s;
    })
    this.clientService.VilleList().subscribe(v=>{
      this.villes = v;
    })
  // console.log(this.activatedRoute.snapshot.params['id']);
  this.clientService.editeClient(this.activatedRoute.snapshot.params['id']).subscribe(c=>{
    this.currentClient = c;
    this.newCommercialeId = this.currentClient.commerciale?.id!;
    this.newVilleId = this.currentClient.ville?.id!;
    this.newPaysId = this.currentClient.pays?.idPays!;
    this.newStatusId = this.currentClient.statut?.id!;
  })
  }

updateClient() {
    this.currentClient.pays = this.lpays.find(c=>c.idPays==this.newPaysId);
    this.currentClient.ville = this.villes.find(v=>v.id==this.newVilleId);
    this.currentClient.commerciale = this.Commerciales.find(o=>o.id==this.newCommercialeId);
    this.currentClient.statut = this.status.find(s=>s.id==this.newStatusId);
    this.clientService.updateClient(this.currentClient).subscribe(c=>{
      this.router.navigate(['admin/clients'])
    })
}
}

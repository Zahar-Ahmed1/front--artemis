import {Component, OnInit, ViewChild} from '@angular/core';

import {ClientModel} from "../models/client.model";
import {ClientService} from "../services/client.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {response} from "express";
import {ApiResponse} from "../models/ApiResponse";
import {PaysModel} from "../models/pays.model";
import {CommercialeModel} from "../models/commerciale.model";
import {VilleModel} from "../models/ville.model";
import {StatutModel} from "../models/statut.model";
import {FormsModule} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    FormsModule,
    MatPaginator
  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent implements OnInit {
  clientsList :ClientModel[] = [] ;
  pays ! : PaysModel[];
  commerciale! : CommercialeModel[]
  ville! : VilleModel[];
  status!:StatutModel[];
  KwNom!: any
  KwStatut! : any
  KwAdress! : any
  KwCommerciale! : any
  KwPays!: any
  KwVille! : any
  @ViewChild(MatPaginator) paginator!:MatPaginator


  errorMessage : string = "";
  constructor(public clientService:ClientService) {


  }

  ngOnInit() {
    this.clientService.ClientList().subscribe((client ) =>
      {
      this.clientsList = client
      })

    this.clientService.PaysList().subscribe((p=>{
      this.pays = p;
    }))
    this.clientService.StatutList().subscribe(s=>{
      console.log(s)
      this.status = s;
    })
    this.clientService.CommercialeList().subscribe(c=>{

      this.commerciale = c;
    })
    this.clientService.VilleList().subscribe(v=>{
      this.ville = v;
    })



  }

  DeleteClient( client : ClientModel){
    let message = confirm("are you sure?");
    if(message)
      this.clientService.deleteClient( client.idClient!).subscribe(()=>{
       this.loadClient()
      });
  }

  loadClient(){
    this.clientService.ClientList().subscribe(p=>{
      this.clientsList = p;
      }
    )
  }

  searchNom(){
    this.clientsList = this.clientsList.filter((n:any)=>n.nom?.includes(this.KwNom))
  }

  searchStatut(){
    if (!this.KwStatut) return;

    this.clientsList = this.clientsList.filter(client =>
      client.statut && client.statut.statut && client.statut.statut.includes(this.KwStatut)
    );  }

  searchAdress(){
    this.clientsList = this.clientsList.filter((a:any)=>a.address.includes(this.KwAdress))
  }

  searchPays(){
    this.clientsList = this.clientsList.filter(b => b.pays?.pays.includes(this.KwPays));
  }

  searchVille(){
    this.clientsList = this.clientsList.filter(x => x.ville?.ville.includes(this.KwVille));
  }

  searchCommerciale(){
    this.clientsList = this.clientsList.filter(c=>c.commerciale?.nom.includes(this.KwCommerciale))
  }



}

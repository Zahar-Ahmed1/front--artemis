import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ContactModel} from "../models/contact.model";
import {MetierModel} from "../models/metier.model";
import {ClientModel} from "../models/client.model";
import {CiviliteModel} from "../models/civilite.model";
import {PaysModel} from "../models/pays.model";
import {CommercialeModel} from "../models/commerciale.model";
import {VilleModel} from "../models/ville.model";
import {StatutModel} from "../models/statut.model";
import {LettreModel} from "../models/lettre.model";


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiURL: string = "http://localhost:8080/api";
  contacts! : ContactModel[];
  contact! : ContactModel;
  metiers!: MetierModel[];
  metier! : MetierModel;
  clients! : ClientModel[];
  client! : ClientModel;
  civilites!: CiviliteModel[]
  civilite!: CiviliteModel;
  lpays!: PaysModel[];
  pays!: PaysModel;
  commerciales!: CommercialeModel[];
  commerciale!: CommercialeModel;
  villes!: VilleModel[];
  ville!: VilleModel;
  statuts! : StatutModel[];
  statut! : StatutModel;
  letters!: LettreModel[];
  letter!: LettreModel;

  constructor(private httpClient:HttpClient, ) { }

  VilleListe(){
    return this.httpClient.get<VilleModel[]>(this.apiURL+"/villes", httpOptions)
  }

  StatutList() {
    return this.httpClient.get<StatutModel[]>(this.apiURL+"/statuts", httpOptions );
  }

  CommercialeList() {
    return this.httpClient.get<CommercialeModel[]>(this.apiURL+"/commerciales", httpOptions );
  }

  PaysList() {
    return this.httpClient.get<PaysModel[]>(this.apiURL+"/pays", httpOptions );
  }

  ClientList() {
    return this.httpClient.get<ClientModel[]>(this.apiURL+"/clients", httpOptions );
    // return this.clients
  }
  ContactList(){
    return this.httpClient.get<ContactModel[]>(this.apiURL + "/contacts", httpOptions)
  }

  CommeList(){
    return  this.httpClient.get<MetierModel[]>(this.apiURL+"/metiers", httpOptions)
  }
  CiviliteList(){
    return  this.httpClient.get<CiviliteModel[]>(this.apiURL+"/civilites", httpOptions)
  }
  LetterList(){
    return  this.httpClient.get<LettreModel[]>(this.apiURL+"/lettres" , httpOptions)
  }

}

import { Injectable } from '@angular/core';
import {ContactModel} from "../models/contact.model";
import {ClientModel} from "../models/client.model";
import {MetierModel} from "../models/metier.model";
import {ClientService} from "./client.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CiviliteModel} from "../models/civilite.model";
import {FonModel} from "../models/fon.model";


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiURL: string = "http://localhost:8080/api";
  contacts! : ContactModel[];
  contact! : ContactModel;
  metiers!: FonModel[];
  metier! : FonModel;
  clients! : ClientModel[];
  client! : ClientModel;
  civilites!: CiviliteModel[]
  civilite!: CiviliteModel





  constructor(private clientService:ClientService,private http : HttpClient) {
   // this.clients = this.clientService.ClientList();
    this.metiers = []

    this.contacts = [

      // {
      //   id: 1,
      //   nom: "ahmed",
      //   prenom: "true",
      //   adresseLivraison: "null",
      //   fonction : {functionId: 2 , fonctionName : "jninir"},
      //   email: "ahmed V n 9 aljdjfjosdfjods",
      //   tel: 0,
      //   client: {},
      //   // client: { idClient: 1,
      //   //   nom: "ahmed",
      //   //   statut: "true",
      //   //   typeLivraison: "null",
      //   //   commerciale: {IdCommerciale: 5, nomCommerciale: "fati"},
      //   //   adresse: "ahmed V n 9 aljdjfjosdfjods",
      //   //   ville: "CasaBlanca",
      //   //   pays:{idPays: 5 , Pays: "EGYPTE"},},
      // },
      // {
      //   id: 2,
      //   nom: "hmad",
      //   prenom: "false",
      //   adresseLivraison: "null",
      //   fonction : {functionId: 1 , fonctionName : "ingenieur"},
      //   email: "ahmed V n 9 aljdjfjosdfjods",
      //   tel: 0,
      //   client:{}
      //   // { idClient: 1,
      //   //   nom: "ahmed",
      //   //   statut: "true",
      //   //   typeLivraison: "null",
      //   //   commerciale: {IdCommerciale: 5, nomCommerciale: "fati"},
      //   //   adresse: "ahmed V n 9 aljdjfjosdfjods",
      //   //   ville: "CasaBlanca",
      //   //   pays:{idPays: 5 , Pays: "EGYPTE"},},
      // },
      // {
      //   id: 3,
      //   nom: "mad",
      //   prenom: "false",
      //   adresseLivraison: "null",
      //   fonction : {functionId: 1 , fonctionName : "ingenieur"},
      //   email: "ahmed V n 9 aljdjfjosdfjods",
      //   tel: 0,
      //   client:{}
      //   // { idClient: 1,
      //   //   nom: "ahmed",
      //   //   statut: "true",
      //   //   typeLivraison: "null",
      //   //   commerciale: {IdCommerciale: 5, nomCommerciale: "fati"},
      //   //   adresse: "ahmed V n 9 aljdjfjosdfjods",
      //   //   ville: "CasaBlanca",
      //   //   pays:{idPays: 5 , Pays: "EGYPTE"},},
      // },
      // {
      //   id: 4,
      //   nom: "saad",
      //   prenom: "false",
      //   adresseLivraison: "null",
      //   fonction : {functionId: 1 , fonctionName : "ingenieur"},
      //   email: "ahmed V n 9 aljdjfjosdfjods",
      //   tel: 0,
      //   client:{}
      //   // { idClient: 1,
      //   //   nom: "ahmed",
      //   //   statut: "true",
      //   //   typeLivraison: "null",
      //   //   commerciale: {IdCommerciale: 5, nomCommerciale: "fati"},
      //   //   adresse: "ahmed V n 9 aljdjfjosdfjods",
      //   //   ville: "CasaBlanca",
      //   //   pays:{idPays: 5 , Pays: "EGYPTE"},},
      // },
      // {
      //   id: 5,
      //   nom: "achrad",
      //   prenom: "false",
      //   adresseLivraison: "null",
      //   fonction : {functionId: 1 , fonctionName : "ingenieur"},
      //   email: "ahmed V n 9 aljdjfjosdfjods",
      //   tel: 0,
      //   client:{}
      //   // { idClient: 1,
      //   //   nom: "ahmed",
      //   //   statut: "true",
      //   //   typeLivraison: "null",
      //   //   commerciale: {IdCommerciale: 5, nomCommerciale: "fati"},
      //   //   adresse: "ahmed V n 9 aljdjfjosdfjods",
      //   //   ville: "CasaBlanca",
      //   //   pays:{idPays: 5 , Pays: "EGYPTE"},},
      // },

    ]
  }
  ContactList(){
    return this.http.get<ContactModel[]>(this.apiURL + "/contacts", httpOptions)
  }
  deleteContact(id : number){
    return this.http.delete(this.apiURL+"/contacts/"+id, httpOptions)
  }
  save(newContact : ContactModel){
    return this.http.post(this.apiURL+"/contacts", newContact);
  }
  editeContact(id : number){
    return this.http.get<ContactModel>(this.apiURL+"/contacts/"+id , httpOptions);
  }

  updateContact(contact : ContactModel){
    return this.http.put(this.apiURL+"/contacts/update", contact)
  }

  sortContact(){
    this.contacts.sort(
      (x,y) =>
        (x.id! > y.id! ? 1 : -1)
    )
  }
  CommeList(){
    return  this.http.get<FonModel[]>(this.apiURL+"/fons", httpOptions)
  }
  CiviliteList(){
    return  this.http.get<CiviliteModel[]>(this.apiURL+"/civilites", httpOptions)
  }
  ClientList(){
    return this.http.get<ClientModel[]>(this.apiURL+"/clients", httpOptions)
  }
  editeComme(id : number){
    this.metier = this.metiers.find(c => c.id == id)!;
    return this.metier;
  }
}

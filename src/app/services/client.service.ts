import { Injectable, Optional } from '@angular/core';
import { ClientModel } from "../models/client.model";
import { PaysModel } from "../models/pays.model";
import { CommercialeModel } from "../models/commerciale.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {VilleModel} from "../models/ville.model";
import * as http from "node:http";
import {StatutModel} from "../models/statut.model";
import {ContactModel} from "../models/contact.model";
import {debug} from "node:util";

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  apiURL: string = "http://localhost:8080/api";
  clients!: ClientModel[];
  client!: ClientModel;
  lpays!: PaysModel[];
  pays!: PaysModel;
  commerciales!: CommercialeModel[];
  commerciale!: CommercialeModel;
  villes!: VilleModel[];
  ville!: VilleModel;
  statuts! : StatutModel[];
  statut! : StatutModel;
  contacts!:ContactModel[]
  contact!: ContactModel

  constructor(private http : HttpClient) {
  /* this.commerciales = [
   ]
    this.lpays = [
    ]*/
    //this.clients = []
  }

  ClientList() {
    return this.http.get<ClientModel[]>(this.apiURL+"/clients", httpOptions );
   // return this.clients
  }

  deleteClient(id : number) {
    return this.http.delete(this.apiURL+"/clients/"+id, httpOptions)
  }

  addClient(newClient: ClientModel) {
    // this.contact.id= 1;
    // this.contact.nom="ahmed";
    // this.contact.prenom="zahar";
    // this.contact.tel=2333333;
    // this.contact.email="shfhfhfhf";
    // this.contact.adresseLivraison="mmmmm";
    // this.contact.client={"idClient":4,"nom":"waw","statut":null,"typeLivraison":"cndjcdnjncdncdjn jn","commerciale":null,"adresse":"waw","pays":null,"ville":null,"contacts":[]};

   return this.http.post<ClientModel>(this.apiURL+"/clients", newClient  )
  }

  editeClient(id: number) {
    return this.http.get<ClientModel>(this.apiURL+"/clients/"+id , httpOptions);
  }

  updateClient(client: ClientModel) {
    return this.http.put<ClientModel>(this.apiURL+"/clients/update", client);
  }

  sortClient() {
    this.clients.sort(
      (x, y) =>
        (x.idClient! > y.idClient! ? 1 : -1)
    )
  }

  PaysList() {
    return this.http.get<PaysModel[]>(this.apiURL+"/pays", httpOptions );
  }

  editePays(id: number) {
    this.pays = this.lpays.find(c => c.idPays == id)!;
    return this.pays;
  }


  CommercialeList() {
    return this.http.get<CommercialeModel[]>(this.apiURL+"/commerciales", httpOptions );
  }

  editeCommerciale(id: number) {
    this.commerciale = this.commerciales.find(c => c.id == id)!;
    return this.commerciale;
  }
  VilleList() {
    return this.http.get<VilleModel[]>(this.apiURL+"/villes", httpOptions );
  }

  editeVille(id: number) {
    this.ville = this.villes.find(c => c.id == id)!;
    return this.ville;
  }



  StatutList() {
    return this.http.get<StatutModel[]>(this.apiURL+"/statuts", httpOptions );
  }

  editeStatut(id: number) {
    this.statut = this.statuts.find(c => c.id == id)!;
    return this.statut;
  }
}

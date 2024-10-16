/*
import { Injectable } from '@angular/core';
import {ClientModel} from "../models/client.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LettreModel} from "../models/lettre.model";
import {TicketGeneratorComponent} from "../ticket-generator/ticket-generator.component";
import {TicketModel} from "../models/ticket.model";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  apiURL: string = "http://localhost:8080/api";
  clients!: ClientModel[];
  client!: ClientModel;
  letters! :LettreModel[];
  letter!:LettreModel
  newClient!: ClientModel
  newLetter!:LettreModel
  newTicket!:TicketModel
  ticket!:TicketModel


  constructor(private http:HttpClient) { }

  ClientList(){
    return this.http.get<ClientModel[]>(this.apiURL+"/clients", httpOptions)
  }
  LetterList(){
    return  this.http.get<LettreModel[]>(this.apiURL+"/lettres" , httpOptions)
  }

  getAllTickets(): Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(`${this.apiURL}/tickets`, httpOptions);
  }

  generateTickets(letterId: number | undefined, clientId: number | undefined): Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(`${this.apiURL}/generate?letterId=${letterId}&clientId=${clientId}`, httpOptions);
  }
}
*/

import { Injectable } from '@angular/core';
import { ClientModel } from "../models/client.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LettreModel } from "../models/lettre.model";
import { TicketModel } from "../models/ticket.model";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  apiURL: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  ClientList(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(`${this.apiURL}/clients`, httpOptions);
  }

  LetterList(): Observable<LettreModel[]> {
    return this.http.get<LettreModel[]>(`${this.apiURL}/lettres`, httpOptions);
  }


  generateTickets(letterId?:number, clientId?:number): Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(`${this.apiURL}/generate?letterId=${letterId}&clientId=${clientId}`, httpOptions);
  }
  getAllTickets(): Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(`${this.apiURL}/tickets`, httpOptions); // Ajustez l'URL selon votre API
  }

}

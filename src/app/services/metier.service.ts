import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MetierModel} from "../models/metier.model";


const httpOptions = {
  headers : new HttpHeaders({
    'content-type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class MetierService {
  metier ! : MetierModel[]
  apiURL: string = "http://localhost:8080/api";


  constructor(private  httpClient:HttpClient) { }

  MetierList(){
    this.httpClient.get<MetierModel[]>(this.apiURL+"/metiers", httpOptions)
  }
}

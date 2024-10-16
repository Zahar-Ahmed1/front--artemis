import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StatutModel} from "../models/statut.model";


const httpOptions = {
  headers : new HttpHeaders({
    'content-type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  statuts!: StatutModel;
  apiURL: string = "http://localhost:8080/api";

  constructor(private httpClient:HttpClient) { }

  StatusList(){
    return this.httpClient.get<StatutModel[]>(this.apiURL+"/statuts" , httpOptions)
  }

  AddStatus(newStatus : StatutModel){
    return this.httpClient.post(this.apiURL+"/statuts", newStatus)
  }
  deleteStatut(id : number){
    return this.httpClient.delete(this.apiURL+"/statuts/"+id , httpOptions)
  }
}

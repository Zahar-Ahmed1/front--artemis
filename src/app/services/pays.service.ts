import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PaysModel} from "../models/pays.model";


const httpOptions = {
  headers : new HttpHeaders({
    'content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PaysService {
   pays!: PaysModel[];
  apiURL: string = "http://localhost:8080/api";
  constructor(private httpClient:HttpClient) {
    this.pays = [];
  }
  PaysList(){
    return this.httpClient.get<PaysModel[]>(this.apiURL+"/pays",httpOptions)
  }
  deletePyas(id : number){
    return this.httpClient.delete(this.apiURL+"/pays/"+id , httpOptions)
  }
  addPays(newPays: PaysModel){
    return this.httpClient.post(this.apiURL+"/pays", newPays)
  }

}

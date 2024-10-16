import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FonModel} from "../models/fon.model";



const httpOptions = {
  headers : new HttpHeaders({
    'content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class FonService {

  apiURL: string = "http://localhost:8080/api";
  constructor(private httpClient:HttpClient) { }

  FonList(){
    return this.httpClient.get<FonModel[]>(this.apiURL+"/fons", httpOptions)
  }

  addFon(newFon: FonModel){
    return this.httpClient.post<FonModel>(this.apiURL+"/fons", newFon )
  }

  deleteFon(id : number){
    return this.httpClient.delete(this.apiURL+"/fons/"+id , httpOptions)
  }
}

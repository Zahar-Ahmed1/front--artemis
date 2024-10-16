import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {VilleModel} from "../models/ville.model";



const httpOptions = {
  headers : new HttpHeaders({
    'content-type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class VilleService {
  villes ! : VilleModel [];
  apiURL: string = "http://localhost:8080/api";


  constructor(private http:HttpClient) {
    this.villes = [];
  }
  VilleListe(){
    return this.http.get<VilleModel[]>(this.apiURL+"/villes", httpOptions)
  }

  addVille(newVille: VilleModel){
    return this.http.post(this.apiURL+"/villes", newVille)
  }
  deleteVille(id : number){
    return this.http.delete(this.apiURL+"/villes/"+id , httpOptions )
  }
}

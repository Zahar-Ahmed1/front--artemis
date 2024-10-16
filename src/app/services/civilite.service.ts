import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CiviliteModel} from "../models/civilite.model";


const httpOtions = {
  headers : new HttpHeaders({
    'content-type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CiviliteService {

  civilites !: CiviliteModel[];
  apiURL: string = "http://localhost:8080/api";



  constructor(private http:HttpClient) { }
  CiviliteList(){
    return this.http.get<CiviliteModel[]>(this.apiURL+"/civilites", httpOtions)
  }


  addCivilite(newcivilite:CiviliteModel){
    return this.http.post(this.apiURL+"/civilites", newcivilite)
  }


  deleteCivilite(id : number){
    return this.http.delete(this.apiURL+"/civilites/"+id ,httpOtions)
  }


}

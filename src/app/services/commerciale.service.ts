import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CommercialeModel} from "../models/commerciale.model";
import {ContactModel} from "../models/contact.model";



const httpOptions = {
  headers : new HttpHeaders({
    'content-type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CommercialeService {
  commerciales ! : CommercialeModel
  apiURL: string = "http://localhost:8080/api";


  constructor(private http :HttpClient) { }

  CommercialeList(){
    return this.http.get<CommercialeModel[]>(this.apiURL+"/commerciales", httpOptions)
  }
  save(newCommerciale : CommercialeModel){debugger
    return this.http.post(this.apiURL+"/commerciales", newCommerciale);
  }
  deleteCommerciale(id : number){
    return this.http.delete(this.apiURL+"/commerciales/"+id , httpOptions)
  }
}

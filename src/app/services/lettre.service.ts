import { Injectable } from '@angular/core';
import {LettreModel} from "../models/lettre.model";
import {ContactModel} from "../models/contact.model";
import {ClientModel} from "../models/client.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";


const httpOptions = {
  headers : new HttpHeaders({
      'content-type': 'application/json'
    })
}
@Injectable({
  providedIn: 'root'
})
export class LettreService {
  letters!: LettreModel[];
  letter!: LettreModel;
  apiURL: string = "http://localhost:8080/api";

  constructor(private http:HttpClient) {
    this.letters = []

  }
  LetterList(){
    return  this.http.get<LettreModel[]>(this.apiURL+"/lettres" , httpOptions)
  }
  deleteLetter(id : number){
    return this.http.delete(this.apiURL+"/lettres/"+id , httpOptions)
  }


  addLetter(newLetter : LettreModel){
    return this.http.post(this.apiURL+"/letters", newLetter)
  }
  editeLetter(id : number){
    return this.http.get<LettreModel>(`${this.apiURL+"/lettres"}/${id}`);
  }

  updateLetter(letter : LettreModel){
    return this.http.put<LettreModel>(this.apiURL+"/lettres/update", letter)
  }

  sortLetter(){
    this.letters.sort(
      (x,y) =>
        (x.id! > y.id! ? 1 : -1)
    )
  }

}


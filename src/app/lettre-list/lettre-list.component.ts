import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ContactModel} from "../models/contact.model";
import {ContactService} from "../services/contact.service";
import {LettreModel} from "../models/lettre.model";
import {LettreService} from "../services/lettre.service";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-lettre-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './lettre-list.component.html',
  styleUrl: './lettre-list.component.css'
})
export class LettreListComponent implements OnInit{

  letters : LettreModel[] = [];
  KwNom : any
  KwTitle : any

  constructor(private lettreService:LettreService) {}

  ngOnInit() {

    this.lettreService.LetterList().subscribe((l=>{
      this.letters = l;
    }))
  }

  DeleteLetter( letter : LettreModel){
    let message = confirm("are you sure?");
    if(message) {
      this.lettreService.deleteLetter(letter.id!).subscribe(() => {
        this.loadLetter()
      })
    }
  }


  loadLetter(){
    this.lettreService.LetterList().subscribe(e=>{
        this.letters = e;
      }
    )
  }

  chercherNom() {
    this.letters = this.letters.filter((e:any)=>e.nom.includes(this.KwNom))
  }


  chercherTitle(){
    this.letters = this.letters.filter((t:any)=>t.titre.includes(this.KwTitle))
  }
}

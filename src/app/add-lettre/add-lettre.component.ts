import { Component } from '@angular/core';
import {LettreModel} from "../models/lettre.model";
import {LettreService} from "../services/lettre.service";
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-add-lettre',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-lettre.component.html',
  styleUrl: './add-lettre.component.css'
})
export class AddLettreComponent {

  newLetter = new LettreModel();
  constructor(private lettreService:LettreService,
              private router : Router) {
  }
  addLetter(){
    this.lettreService.addLetter(this.newLetter).subscribe((l=>{
      this.router.navigate(['admin/lettres'])
    }));

  }

}

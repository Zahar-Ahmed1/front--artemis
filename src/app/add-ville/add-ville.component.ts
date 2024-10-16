import { Component } from '@angular/core';
import {VilleModel} from "../models/ville.model";
import {VilleService} from "../services/ville.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-ville',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-ville.component.html',
  styleUrl: './add-ville.component.css'
})
export class AddVilleComponent {

  newVille = new VilleModel()

  constructor(private villeService:VilleService, private router:Router) {
  }

  add(){
    this.villeService.addVille(this.newVille).subscribe(v=>{
      this.router.navigate(['admin/villes'])
    })
  }

}

import { Component } from '@angular/core';
import {CiviliteModel} from "../models/civilite.model";
import {CiviliteService} from "../services/civilite.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-civilite',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-civilite.component.html',
  styleUrl: './add-civilite.component.css'
})
export class AddCiviliteComponent {

  newCivilite = new CiviliteModel()
  constructor(private civiliteService:CiviliteService , private router:Router) {

  }

  add(){
    this.civiliteService.addCivilite(this.newCivilite).subscribe(c=>{
      this.router.navigate(['admin/civilites'])
    })
  }

}

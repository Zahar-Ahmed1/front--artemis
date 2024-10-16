import { Component } from '@angular/core';
import {FonModel} from "../models/fon.model";
import {FonService} from "../services/fon.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-fon',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-fon.component.html',
  styleUrl: './add-fon.component.css'
})
export class AddFonComponent {

  newFon = new FonModel()

  constructor(private fonService:FonService, private router:Router) {
  }

  add(){
    this.fonService.addFon(this.newFon).subscribe(f=>{
      this.router.navigate(['admin/metiers'])
    })
  }
}

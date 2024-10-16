import { Component } from '@angular/core';
import {PaysModel} from "../models/pays.model";
import {PaysService} from "../services/pays.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-pays',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-pays.component.html',
  styleUrl: './add-pays.component.css'
})
export class AddPaysComponent {

  newPays = new PaysModel()
  constructor(private paysService:PaysService, private router:Router) {
  }

  add(){
    this.paysService.addPays(this.newPays).subscribe(p=>{
      this.router.navigate(['admin/pays'])
    })
  }

}

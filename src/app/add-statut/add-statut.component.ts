import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StatutModel} from "../models/statut.model";
import {StatusService} from "../services/status.service";
import {Router} from "@angular/router";
import {StModel} from "../models/st.model";

@Component({
  selector: 'app-add-statut',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './add-statut.component.html',
  styleUrl: './add-statut.component.css'
})
export class AddStatutComponent {

  newStatut = new StModel()

  constructor(private statusService:StatusService, private router:Router) {
  }

  add(){
    this.statusService.AddStatus(this.newStatut).subscribe(s=>{
      this.router.navigate(['admin/status'])
    })
  }

}

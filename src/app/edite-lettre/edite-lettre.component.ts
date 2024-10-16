import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {LettreModel} from "../models/lettre.model";
import {LettreService} from "../services/lettre.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-edite-lettre',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edite-lettre.component.html',
  styleUrl: './edite-lettre.component.css'
})
export class EditeLettreComponent implements OnInit{

  public currentLetter = new LettreModel();

  constructor(
    private lettreService: LettreService,
    private activatedRoute: ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['id']);
     this.lettreService.editeLetter(this.activatedRoute.snapshot.params['id']).subscribe(l=>{
       this.currentLetter = l;
     })
  }

  updateLetter(){
    this.lettreService.updateLetter(this.currentLetter).subscribe(l=>{
      this.router.navigate(['admin/lettres']);
    })

  }

}

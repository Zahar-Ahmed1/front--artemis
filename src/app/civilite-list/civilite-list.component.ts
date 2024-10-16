import {Component, OnInit} from '@angular/core';
import {CiviliteService} from "../services/civilite.service";
import {CiviliteModel} from "../models/civilite.model";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-civilite-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './civilite-list.component.html',
  styleUrl: './civilite-list.component.css'
})
export class CiviliteListComponent implements OnInit{

  civilites! : CiviliteModel[]

  constructor(private civiliteService:CiviliteService) {
  }
  ngOnInit() {
    this.civiliteService.CiviliteList().subscribe(ci=>{
      this.civilites = ci;
    })
  }

  DelteCivilite( civilite : CiviliteModel){
    let message = confirm("are you sure?");
    if (message)
      this.civiliteService.deleteCivilite(civilite.id!).subscribe(()=>{
        this.loadCivilite()
      });
  }

  loadCivilite(){
    this.civiliteService.CiviliteList().subscribe(c=>{
      this.civilites = c;
    })
  }


}

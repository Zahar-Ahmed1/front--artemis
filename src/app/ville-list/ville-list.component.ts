import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {VilleModel} from "../models/ville.model";
import {VilleService} from "../services/ville.service";
import {RouterLink} from "@angular/router";
import {subscribe} from "node:diagnostics_channel";

@Component({
  selector: 'app-ville-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './ville-list.component.html',
  styleUrl: './ville-list.component.css'
})
export class VilleListComponent implements OnInit{

  villes!: VilleModel[];

  constructor(private villeService:VilleService) {
  }
  ngOnInit() {
    this.villeService.VilleListe().subscribe(v=>{
      this.villes = v;
    })
  }

  DeleteVille(ville : VilleModel){
    let message = confirm("are yu sure?");
    if (message)
      this.villeService.deleteVille(ville.id!).subscribe(()=>{
        this.loadVille()
      });
  }
  loadVille(){
    this.villeService.VilleListe().subscribe(v=>{
      this.villes = v;
    })
  }

}

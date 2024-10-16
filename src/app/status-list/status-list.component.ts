import {Component, OnInit} from '@angular/core';
import {StatusService} from "../services/status.service";
import {StatutModel} from "../models/statut.model";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-status-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './status-list.component.html',
  styleUrl: './status-list.component.css'
})
export class StatusListComponent implements OnInit{
  status! :StatutModel[]

  constructor(private statusService:StatusService) {
  }
  ngOnInit() {
    this.statusService.StatusList().subscribe(s=>{
      this.status= s;
    })

  }

  DeleteStatut(statut : StatutModel){
    let message = confirm("are you sure?")
    if (message)
    this.statusService.deleteStatut(statut.id!).subscribe(()=>{
      this.loadStatut()
    })
  }

  loadStatut(){
    this.statusService.StatusList().subscribe(s=>{
      this.status = s;
    })
  }

}

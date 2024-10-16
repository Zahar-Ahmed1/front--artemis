import {Component, OnInit} from '@angular/core';
import {FonService} from "../services/fon.service";
import {FonModel} from "../models/fon.model";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {id} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-fon-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './fon-list.component.html',
  styleUrl: './fon-list.component.css'
})
export class FonListComponent implements OnInit{
  fonl! : FonModel[];
  constructor(private fonService:FonService) {
  }
  ngOnInit() {
    this.fonService.FonList().subscribe(f=>{
      console.log(this.fonl)
      this.fonl = f;
    })
  }

  DeleteFon(fon : FonModel){
    let message = confirm("are you sure?");
    if(message)
       this.fonService.deleteFon(fon.id!).subscribe(()=>{
         this.loadFon()
       })
  }

  loadFon(){
    this.fonService.FonList().subscribe(f =>{
      this.fonl = f;
    })
  }

}

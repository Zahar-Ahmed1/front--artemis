import {Component, OnInit} from '@angular/core';
import {CommercialeModel} from "../models/commerciale.model";
import {CommercialeService} from "../services/commerciale.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-commerciale-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './commerciale-list.component.html',
  styleUrl: './commerciale-list.component.css'
})
export class CommercialeListComponent implements OnInit{
  commerciales! : CommercialeModel[]

  constructor(private commercialeService:CommercialeService) {
  }

  ngOnInit() {
    this.commercialeService.CommercialeList().subscribe(co=>{
      this.commerciales = co;
    })
  }

  DeleteCommerciale( commerciale : CommercialeModel){
    let message = confirm("are you sure?");
    if (message)
      this.commercialeService.deleteCommerciale(commerciale.id!).subscribe(()=>{
        this.loadCommerciale()
      });
  }

  loadCommerciale(){
    this.commercialeService.CommercialeList().subscribe(c=>{
      this.commerciales = c;
    })
  }

}

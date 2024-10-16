import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {PaysModel} from "../models/pays.model";
import {PaysService} from "../services/pays.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pays-list',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    RouterLink
  ],
  templateUrl: './pays-list.component.html',
  styleUrl: './pays-list.component.css'
})
export class PaysListComponent implements OnInit {

  pays! : PaysModel [];


  constructor(private paysService:PaysService) {}

  ngOnInit(){
    this.paysService.PaysList().subscribe(p=>{
      this.pays = p;
    })

}

DeletePays(pays : PaysModel){
    this.paysService.deletePyas(pays.idPays!)
      let message = confirm("are you sure?");
      if(message)
        this.paysService.deletePyas(pays.idPays!).subscribe(()=> {
          this.loadPays()
        })

}


loadPays(){
    this.paysService.PaysList().subscribe(p=>{
      this.pays = p;
    })
}

}

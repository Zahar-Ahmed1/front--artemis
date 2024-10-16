import {Component, OnInit} from '@angular/core';
import {MetierModel} from "../models/metier.model";
import {MetierService} from "../services/metier.service";

@Component({
  selector: 'app-metier-list',
  standalone: true,
  imports: [],
  templateUrl: './metier-list.component.html',
  styleUrl: './metier-list.component.css'
})
export class MetierListComponent implements OnInit{
  metier! : MetierModel[];
  constructor(private metierService:MetierService) {
  }
  ngOnInit() {

  }

}

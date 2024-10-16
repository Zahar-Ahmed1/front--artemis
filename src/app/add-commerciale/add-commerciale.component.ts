import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ContactModel} from "../models/contact.model";
import {CommercialeModel} from "../models/commerciale.model";
import {CommercialeService} from "../services/commerciale.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-commerciale',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-commerciale.component.html',
  styleUrl: './add-commerciale.component.css'
})
export class AddCommercialeComponent {
  newCommerciale = new CommercialeModel();
  constructor(private commercialeService:CommercialeService , private router:Router) {
  }
  addLetter() {
    this.commercialeService.save(this.newCommerciale).subscribe((l => {
      this.router.navigate(['admin/commerciales'])
    }));
  }

}

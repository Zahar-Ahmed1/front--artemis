import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AuthService} from "./services/auth.service";

import {BaseChartDirective} from 'ng2-charts';
import {NgxChartsModule} from "@swimlane/ngx-charts";





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet, RouterLink, FormsModule,
    HttpClientModule, ReactiveFormsModule,
    MatPaginatorModule,BaseChartDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front--artemis';
 /* actions : Array<any> = [
    {title :"Client" , "route" : "/clients" ,icon : "person-fill"},
    {title: "Ajouter Client" , route: "/ajouter-client", icon: "person-plus-fill"},
    // {title: "Edite Client",route: "/edite-client",icon: ""},
    {title :"Contact" , "route" : "/contacts" ,icon : "person"},
    {title: "Ajouter Contact" , route: "/ajouter-contact", icon: "person-plus"},
    //{title: "Edite Contact",route: "/edite-contact",icon: ""},
    {title :"Lettre" , "route" : "/lettres" ,icon : "journal"},
    {title: "Ajouter Lettre" , route: "/ajouter-lettre", icon: "journal-plus"},
    {title: "Ticket", route: "/ticket", icon: "bi bi-ticket"},
    {title: "dashboard", route: "/dashboard", icon: "bi bi-house-dash"},
    //{title: "commerciales", route: "/commerciales", icon: "bi bi-ticket"},
//    {title: "Edite Lettre",route: "/edite-lettre",icon: ""}*/

  //];

currentAction : any;
  setCurrentAction(action: any) {
    this.currentAction = action;
  }
  constructor(protected authService : AuthService, private router:Router) {
    let loggedUser:string;
    let isLoggedIn : string;

  }

  logout() {
    this.authService.logout();
  }

}

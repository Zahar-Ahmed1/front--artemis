import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-forbidded',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './forbidded.component.html',
  styleUrl: './forbidded.component.css'
})
export class ForbiddedComponent {
  actions : Array<any> = [
    {title :"Client" , "route" : "/admin/clients" ,icon : "person-fill"},

    {title :"Contact" , "route" : "/admin/contacts" ,icon : "person"},
    {title :"Lettre" , "route" : "/admin/lettres" ,icon : "journal"},
    {title: "Ticket", route: "/admin/ticket", icon: "bi bi-ticket"},
    {title: "dashboard", route: "/admin/dashboard", icon: "bi bi-house-dash"},
    ];
  currentAction : any;
  setCurrentAction(action: any) {
    this.currentAction = action;
  }
  constructor(protected authService : AuthService, private router:Router) {
    let loggedUser:string;
    let isLoggedIn : string;
  }

}

import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserModel} from "../models/user.model";
import {AuthService} from "../services/auth.service";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  error : number=0;
  user: UserModel = new UserModel();

  constructor(private authService: AuthService, private router:Router) {
  }

  onloggedIn() {
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser) {
      this.router.navigate(['admin/clients']);
    }
    else {
      this.error = 1;
      //alert("User authentification failed")
    }

  }
}

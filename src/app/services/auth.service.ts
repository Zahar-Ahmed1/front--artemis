import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";
import {Router} from "@angular/router";
import {routes} from "../app.routes";
import {JwtHelperService} from "@auth0/angular-jwt";
import {HttpClient} from "@angular/common/http";
import * as http from "node:http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users : UserModel[] = [
    {username: "admin", password : "123", roles:['ADMIN']},
    {username: "user", password :"1111", roles:['CACHIER']}
  ]
  private helper = new JwtHelperService ();
  token! : string
  public loggedUser! : string;
  public isLoggedIn : Boolean = false;
  public roles!: string[]

  constructor(private router:Router ,private http: HttpClient) {}

  SignIn(user : UserModel) {
    let validUser = false;
    this.users.forEach(u => {
      if (user.username == u.username && user.password == u.password) {
        validUser = true;
        this.loggedUser = u.username!;
        this.isLoggedIn = true;
        this.roles = u.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
        localStorage.setItem('loggedUser', this.loggedUser);
      }
    })
    return validUser
  }
  isCreate(){
    if (!this.roles)
      return false
    return (this.roles.indexOf('ADMIN')>-1)
  }

  logout() {
    this.loggedUser = undefined!;
    this.isLoggedIn = false;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser')
    localStorage.removeItem('isLoggedIn')
    this.router.navigate(['login'])
  }
  setLoggedUserLs(login:string){
    this.loggedUser = login;
    this.isLoggedIn = true;
    // this.getRoles(login);

  }
  getRoles(username:string){
    this.users.forEach(f=>{
      if(f.username==username)
        this.roles = f.roles;
    })
  }



  login(user : UserModel){
    console.log("userModel:", user)
    return this.http.post<UserModel>("http://localhost:8080/login", user, {observe:'response'})
  }
  saveToken(jwt:string){
    localStorage.setItem("jwt", jwt);
    this.token = jwt;
    this.isLoggedIn = true
    this.decodedJWT();
  }
  decodedJWT(){
    if (this.token!=undefined){
      const decodedToken = this.helper.decodeToken(this.token);
      this.roles = decodedToken.roles;
      this.loggedUser = decodedToken.sub
    }
  }
}
/*

import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private helper = new JwtHelperService();
  private JWT_TOKEN = 'jwt';
  public loggedUser!: string;
  public roles!: string[];
  public isLoggedIn: boolean = false;
  private apiUrl = 'http://localhost:8080/api/login';

  constructor(private router: Router, private http: HttpClient) {}

  login(user: UserModel) {
    this.isLoggedIn = true;
    return this.http.post<{ jwt: string }>(this.apiUrl, user, { observe: 'response' });
  }

  saveToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
    this.decodedJWT();
    this.isLoggedIn = true; // Mettre à jour l'état de connexion
  }

  decodedJWT() {
    const token = localStorage.getItem(this.JWT_TOKEN);
    if (token) {
      const decodedToken = this.helper.decodeToken(token);
      this.roles = decodedToken.roles;
      this.loggedUser = decodedToken.sub;
    }
  }

  isCreate() {
    return this.roles && this.roles.includes('ADMIN');
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem(this.JWT_TOKEN);
    this.router.navigate(['/login']);
  }
}
*/

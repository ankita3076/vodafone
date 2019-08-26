import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public set token(value: string){
    localStorage.setItem('token', value)
  }

  public get token(): string {
    return localStorage.getItem('token')
  }

  public get isAuthenticated(): boolean {
    return this.token != null && this.token != undefined && this.token != '';
  }

  public logout(){
    localStorage.removeItem('token')
  }

}

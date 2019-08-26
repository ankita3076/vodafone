import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { map, catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  public login(login: string, password: string): Observable<boolean> {
  //   return this.http.post<Token>("http://localhost:5000/api/login", {
  //     login: login,
  //     password: password
  //   }).pipe(
  //     map((t: Token) => {
  //       this.authService.token = t.token;
  //       return t;
  //     })
  //   )
  // }
    if (login == 'ab@gmail.com' && password == 'passw') {
      this.authService.token = '3534656'
      return of(true)
    } else {
      return of(false)
    }
  }
}

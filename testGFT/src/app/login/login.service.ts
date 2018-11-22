import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  endpoint = 'https://mighty-refuge-81707.herokuapp.com/api/auth/user/authenticate';

  constructor(private http: HttpClient ) { }

  validateUser(usr): Observable<any>{
    var headers= new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(this.endpoint, usr, {headers: headers});
  }
}

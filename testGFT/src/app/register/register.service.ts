import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  endpoint = 'https://mighty-refuge-81707.herokuapp.com/api/auth/user/create';

  constructor( private http: HttpClient ) { }

  addUser(usr): Observable<any>{
    var headers= new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.endpoint, usr, {headers: headers});
  }
}

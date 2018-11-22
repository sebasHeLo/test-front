import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  constructor( private http: HttpClient ) { }

  getCards(usr): Observable<any>{
    var endpoint = 'https://mighty-refuge-81707.herokuapp.com/api/catalogs/cards';
    var headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'X-access-token': localStorage.getItem("token")
     });
    return this.http.get<any>(endpoint, {headers: headers});
  }

  getAccounts(usr): Observable<any>{
    var endpoint = 'https://mighty-refuge-81707.herokuapp.com/api/accounts';
    var headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'X-access-token': localStorage.getItem("token")
    });
    return this.http.get<any>(endpoint, {headers: headers});
  }
}

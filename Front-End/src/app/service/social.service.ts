import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  private baseUrl = 'http://localhost:8080/social/';
  constructor(private http: HttpClient) { }

  // @ts-ignore
  loginWithGoogle(token): Observable<any>{
    return this.http.post(`${this.baseUrl}google`, {token}).pipe(
      map(
        response => {
          // @ts-ignore
          sessionStorage.setItem('token','Bearer ' + response.token);
          return response;
        }
      )
    );
  }
  // @ts-ignore
  loginWithFacebook(token): Observable<any>{
    return this.http.post(`${this.baseUrl}facebook`, {token}).pipe(
      map(
        response => {
          // @ts-ignore
          sessionStorage.setItem('token','Bearer ' +response.token);
          return response;
        }
      )
    );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    // @ts-ignore
    let head= new HttpHeaders().set("Authorization", sessionStorage.getItem('token'));
    return this.http.get<Student[]>("http://localhost:8080/api/students",{headers: head}).pipe(
      map(
        response => {
          return response;
        }
      )
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable ,  throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  loginUrl = 'http://localhost:3200/api/auth'
  constructor(private http : HttpClient) { 

  }


  userLogin(un, p){
   return this.http.post(this.loginUrl, {email : un, password : p})
   .pipe(catchError(this.formatErrors)); 
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }
}

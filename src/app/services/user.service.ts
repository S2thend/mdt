import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { user } from '../interfaces/user' 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = '/heroes';  // URL to web api
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



  login(u:user): Observable<object> {
    return this.http.post(this.userUrl, u , this.httpOptions);
  }

  constructor(private http: HttpClient) { 
    
  }
}

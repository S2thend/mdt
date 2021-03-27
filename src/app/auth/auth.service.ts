import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { concatMap } from 'rxjs/operators';
import { user } from '../interfaces/user' 
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ok } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private userUrl = '/heroes';  // URL to web api
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private token: string


  login(u:user):boolean{
    this.http.post(this.userUrl, u , this.httpOptions)
    .pipe(
      concatMap(
        (res:any) =>{ 
          if(res.token){
            this.token = res.token
            this.router.parseUrl('/xxxxx');
            return '';
          }else{
            return ''; 
          }
        } 
      )
    )
  }

  constructor(private http: HttpClient) { }
}

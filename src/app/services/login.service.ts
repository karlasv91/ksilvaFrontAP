import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL = 'http://localhost:8080/auth/'

  constructor(private http: HttpClient) { }

  public login(login: login):Observable<JwtDto>{
    return this.http.post<JwtDto>(this.URL+'login', login)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url="https://ksilvaback.onrender.com/persona/"
  constructor(private http:HttpClient) { }

  public traerPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url+"traer")
  }

  public traerUnaPersona(id:number): Observable<Persona>{
      return this.http.get<Persona>(this.url+"buscar/"+id)
  }
}

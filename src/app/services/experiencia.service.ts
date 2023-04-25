import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url="https://ksilvaback.onrender.com/experiencia/"
  constructor(private http:HttpClient) { }

  public traerExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url+"traer")
  }

  public traerUnaExperiencia(id:number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url+"buscar/"+id)
  }

  public crearExperiencia(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.url+"crear",experiencia)
  }

  public borrarExperiencia(id:number): Observable<any>{
    return this.http.delete<any>(this.url+"borrar/"+id)
  }

  public editarExperiencia(id:number, experiencia: Experiencia): Observable<any>{
    return this.http.put<any>(this.url+"editar/"+id,experiencia)
  }
}

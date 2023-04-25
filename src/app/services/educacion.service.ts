import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url="https://ksilvaback.onrender.com/educacion/"
  constructor(private http:HttpClient) {}

    public traerEducacion(): Observable<Educacion[]>{
      return this.http.get<Educacion[]>(this.url+"traer")
    }

    public traerUnaEducacion(id:number): Observable<Educacion>{
      return this.http.get<Educacion>(this.url+"buscar/"+id)
    }
  
    public crearEducacion(educacion: Educacion): Observable<any>{
      return this.http.post<any>(this.url+"crear",educacion)
    }
  
    public borrarEducacion(id:number): Observable<any>{
      return this.http.delete<any>(this.url+"borrar/"+id)
    }
  
    public editarEducacion(id:number, educacion: Educacion): Observable<any>{
      return this.http.put<any>(this.url+"editar/"+id,educacion)
    }

   
}

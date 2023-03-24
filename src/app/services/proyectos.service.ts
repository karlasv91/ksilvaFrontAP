import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url="http://localhost:8080/proyectos/"
  constructor(private http:HttpClient) { }

  public traerProyecto(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.url+"traer")
  }

  public traerUnProyecto(id:number): Observable<Proyectos>{
    return this.http.get<Proyectos>(this.url+"buscar/"+id)
  }

  public crearProyecto(proyecto: Proyectos): Observable<any>{
    return this.http.post<any>(this.url+"crear",proyecto)
  }

  public borrarProyecto(id:number): Observable<any>{
    return this.http.delete<any>(this.url+"borrar/"+id)
  }

  public editarProyecto(id:number, proyecto: Proyectos): Observable<any>{
    return this.http.put<any>(this.url+"editar/"+id,proyecto)
  }
}

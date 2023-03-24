import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardAndSoft } from '../models/hys';

@Injectable({
  providedIn: 'root'
})
export class HysService {

  url="http://localhost:8080/hardAndSoft/"
  constructor(private http:HttpClient) { }

  public traerHyS(): Observable<HardAndSoft[]>{
    return this.http.get<HardAndSoft[]>(this.url+"traer")
  }

  public traerUnaHyS(id:number): Observable<HardAndSoft>{
    return this.http.get<HardAndSoft>(this.url+"buscar/"+id)
  }

  public crearHyS(hardAndSoft: HardAndSoft): Observable<any>{
    return this.http.post<any>(this.url+"crear",hardAndSoft)
  }

  public borrarHyS(id:number): Observable<any>{
    return this.http.delete<any>(this.url+"borrar/"+id)
  }

  public editarHyS(id:number, hardAndSoft: HardAndSoft): Observable<any>{
    return this.http.put<any>(this.url+"editar/"+id,hardAndSoft)
  }
}

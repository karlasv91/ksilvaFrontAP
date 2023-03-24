import { Component } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencia : Experiencia[]= [];

  constructor(private experienciaService: ExperienciaService){}

  ngOnInit(): void {
    this.cargarExperiencia()
      
  }

  cargarExperiencia(){
    this.experienciaService.traerExperiencia().subscribe(
      data=>(
        this.experiencia = data
      )
    )
    console.log(this.experiencia)
  }

  borrarExp(id?:number){
    if(id!=undefined){
      if(confirm("¿estas seguro de querer eliminar?")){
        this.experienciaService.borrarExperiencia(id).subscribe(
          data=>(
            alert("Eliminado")
          )
        )
      }
    }
    this.cargarExperiencia()
  }

}

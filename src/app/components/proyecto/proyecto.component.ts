import { Component } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  proyectos: Proyectos[]= [];

  constructor(private proyectosService: ProyectosService){}

  ngOnInit(): void {
    this.cargarProyecto()
      
  }

  cargarProyecto(){
    this.proyectosService.traerProyecto().subscribe(
      data=>(
        this.proyectos = data
      )
    )
    console.log(this.proyectos)
  }

  borrarPro(id?:number){
    if(id!=undefined){
      if(confirm("¿estas seguro de querer eliminar?")){
        this.proyectosService.borrarProyecto(id).subscribe(
          data=>(
            alert("Eliminado")
          )
        )
      }
    }
    this.cargarProyecto()
  }


}

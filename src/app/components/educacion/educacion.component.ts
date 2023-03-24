import { Component } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  educacion : Educacion[]= [];

  constructor(private educacionService: EducacionService){}

  ngOnInit(): void {
    this.cargarEducacion()
      
  }

  cargarEducacion(){
    this.educacionService.traerEducacion().subscribe(
      data=>(
        this.educacion = data
      )
    )
    console.log(this.educacion)
  }

  borrarEdu(id?:number){
    if(id!=undefined){
      if(confirm("¿estas seguro de querer eliminar?")){
        this.educacionService.borrarEducacion(id).subscribe(
          data=>(
            alert("Eliminado")
          )
        )
      }
    }
    this.cargarEducacion()
  }



}

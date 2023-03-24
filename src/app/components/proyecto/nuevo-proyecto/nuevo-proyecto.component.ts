import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent {

  proyecto!: Proyectos;
  titulo!: string;
  texto!: string;

  constructor(private proyectosSrvice: ProyectosService, private router: Router){}

  ngOnInit(): void {
    
  }

  nuevoPro(){
    this.proyecto = new Proyectos(this.titulo, this.texto)
    this.proyectosSrvice.crearProyecto(this.proyecto).subscribe(
      data=>(
        alert("proyecto guardada"),
        this.router.navigate([''])
      )
    ) 
  }


}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent {
  proyectos!: Proyectos

  constructor(private proyectosService: ProyectosService, private router: Router, private activatedRouter: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.proyectosService.traerUnProyecto(id).subscribe(
      data=>this.proyectos = data
    )
  }
  
  editPro(){
    const id = this.activatedRouter.snapshot.params['id']
    this.proyectosService.editarProyecto(id, this.proyectos).subscribe(
      data=>alert("Editado")
    )
    this.router.navigate([''])
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/Experiencia';
import { Persona } from 'src/app/models/persona';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent {
experiencia!: Experiencia

  
  constructor(private experienciaService: ExperienciaService, private router: Router, private activatedRouter: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.experienciaService.traerUnaExperiencia(id).subscribe(
      data=>this.experiencia = data
    )
  }


  editExp(){
    const id = this.activatedRouter.snapshot.params['id']
    this.experienciaService.editarExperiencia(id, this.experiencia).subscribe(
      data=>alert("Editado")
    )
    this.router.navigate([''])
  }

}

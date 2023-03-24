import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent {

  experiencia!: Experiencia;
  empresa!: string;
  fecha!: string;
  detalle!: string;

  constructor(private experienciaService: ExperienciaService, private router: Router){}

  ngOnInit(): void {
    
  }

  nuevoExp(){
    this.experiencia = new Experiencia(this.empresa, this.fecha, this.detalle)
    this.experienciaService.crearExperiencia(this.experiencia).subscribe(
      data=>(
        alert("experiencia guardada"),
        this.router.navigate([''])
      )
    ) 


  }
}

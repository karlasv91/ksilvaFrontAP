import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent {
  educacion!: Educacion

  constructor(private educacionService: EducacionService, private router: Router, private activatedRouter: ActivatedRoute){}

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id']
    this.educacionService.traerUnaEducacion(id).subscribe(
      data=>this.educacion = data
    )
  }

  editEdu(){
    const id = this.activatedRouter.snapshot.params['id']
    this.educacionService.editarEducacion(id, this.educacion).subscribe(
      data=>alert("Editado")
    )
    this.router.navigate([''])
  }

}

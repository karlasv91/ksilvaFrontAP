import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent {

  educacion!: Educacion;
  fundacion!: string;
  periodo!: string;
  resena!: string;

  constructor(private educacionService: EducacionService , private router: Router){}

  ngOnInit(): void {
    
  }

  nuevaEdu(){
    this.educacion = new Educacion(this.fundacion, this.periodo, this.resena)
    this.educacionService.crearEducacion(this.educacion).subscribe(
      data=>(
        alert("educacion guardada"),
        this.router.navigate([''])
      )
    ) 
  }



}

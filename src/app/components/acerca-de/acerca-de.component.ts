import { Component } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {

  persona!: Persona

  constructor(private personaService:PersonaService){}

  ngOnInit(): void {
    this.cargarPerfil()
    
  }

  cargarPersona(){
    this.personaService.traerPersona().subscribe(
      data=>(console.log(data))
    )
   }

   cargarPerfil(){
    this.personaService.traerUnaPersona(1).subscribe(
      data=>(
        this.persona = data
      )

    )
   }
}

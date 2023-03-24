import { Component } from '@angular/core';
import { HardAndSoft } from 'src/app/models/hys';
import { HysService } from 'src/app/services/hys.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent {
  hardAndSoft : HardAndSoft[]= [];

  constructor(private hardAndSoftService: HysService){}

  ngOnInit(): void {
    this.cargarHyS()
      
  }

  cargarHyS(){
    this.hardAndSoftService.traerHyS().subscribe(
      data=>(
        this.hardAndSoft = data
      )
    )
    console.log(this.hardAndSoft)
  }

  borrarHyS(id?:number){
    if(id!=undefined){
      if(confirm("¿estas seguro de querer eliminar?")){
        this.hardAndSoftService.borrarHyS(id).subscribe(
          data=>(
            alert("Eliminado")
          )
        )
      }
    }
    this.cargarHyS()
  }

}

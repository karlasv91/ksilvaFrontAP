import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardAndSoft } from 'src/app/models/hys';
import { HysService } from 'src/app/services/hys.service';

@Component({
  selector: 'app-nueva-hys',
  templateUrl: './nueva-hys.component.html',
  styleUrls: ['./nueva-hys.component.css']
})
export class NuevaHysComponent {
  hardAndSoft!: HardAndSoft;
  herramienta!: string;
  nivel!: number;

  constructor(private hardAndSoftService: HysService, private router: Router){}

  ngOnInit(): void {
    
  }

  nuevaHyS(){
    this.hardAndSoft= new HardAndSoft(this.herramienta, this.nivel)
    this.hardAndSoftService.crearHyS(this.hardAndSoft).subscribe(
      data=>(
        alert("Hard and Soft Skill guardada"),
        this.router.navigate([''])
      )
    )
    
  }

}

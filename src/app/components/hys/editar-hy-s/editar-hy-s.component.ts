import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardAndSoft } from 'src/app/models/hys';
import { HysService } from 'src/app/services/hys.service';

@Component({
  selector: 'app-editar-hy-s',
  templateUrl: './editar-hy-s.component.html',
  styleUrls: ['./editar-hy-s.component.css']
})
export class EditarHySComponent {
  hardAndSoft! : HardAndSoft

  constructor(private hardAndSoftService: HysService , private router: Router, private activatedRouter: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.hardAndSoftService.traerUnaHyS(id).subscribe(
      data=>this.hardAndSoft = data
    )
  }
  
  editHys(){
    const id = this.activatedRouter.snapshot.params['id']
    this.hardAndSoftService.editarHyS(id, this.hardAndSoft).subscribe(
      data=>alert("Editado")
    )
    this.router.navigate([''])
  }
}

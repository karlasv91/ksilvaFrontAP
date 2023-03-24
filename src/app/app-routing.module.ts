import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia/nueva-experiencia.component';
import { EditarHySComponent } from './components/hys/editar-hy-s/editar-hy-s.component';
import { NuevaHysComponent } from './components/hys/nueva-hys/nueva-hys.component';
import { LoginComponent } from './components/login/login.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { EditarProyectoComponent } from './components/proyecto/editar-proyecto/editar-proyecto.component';
import { NuevoProyectoComponent } from './components/proyecto/nuevo-proyecto/nuevo-proyecto.component';
import { GuardService as guard} from './services/guard.service';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'perfil',component:PortafolioComponent , canActivate:[guard], data:{expectedRol:['admin','user']}}, 
  {path:'nuevaExperiencia', component:NuevaExperienciaComponent, canActivate:[guard], data:{expectedRol:['admin','user']}},
  {path:'editarExperiencia/:id', component:EditarExperienciaComponent, canActivate:[guard], data:{expectedRol:['admin','user']}},
  {path: 'nuevaEducacion', component:NuevaEducacionComponent, canActivate:[guard], data:{expectedRol:['admin','user']}},
  {path: 'editarEducacion/:id', component: EditarEducacionComponent, canActivate:[guard], data:{expectedRol:['admin','user']}},
  {path:'nuevoProyecto', component:NuevoProyectoComponent, canActivate:[guard], data:{expectedRol:['admin','user']}},
  {path:'editarProyecto/:id', component:EditarProyectoComponent, canActivate:[guard], data:{expectedRol:['admin','user']}},
  {path:'nuevaHyS', component:NuevaHysComponent, canActivate:[guard], data:{expectedRol:['admin','user']}},
  {path:'editarHyS/:id', component:EditarHySComponent, canActivate:[guard], data:{expectedRol:['admin','user']}},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia/nueva-experiencia.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { NuevoProyectoComponent } from './components/proyecto/nuevo-proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './components/proyecto/editar-proyecto/editar-proyecto.component';
import { NuevaHysComponent } from './components/hys/nueva-hys/nueva-hys.component';
import { EditarPersonaComponent } from './components/acerca-de/editar-persona/editar-persona.component';
import { EditarHySComponent } from './components/hys/editar-hy-s/editar-hy-s.component';
import { LoginComponent } from './components/login/login.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    NuevaExperienciaComponent,
    PortafolioComponent,
    EditarExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    NuevaHysComponent,
    EditarPersonaComponent,
    EditarHySComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

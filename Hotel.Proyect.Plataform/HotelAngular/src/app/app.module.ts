import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuscarHabitacionByFechaComponent } from './habitacion/buscarHabitacionByFecha';
import { HabitacionServicio } from './habitacion/servicio.habitacion';
import { ReservaHabitacionServicio } from './reserva/servicio.reservaHabitacion';
import { BuscarHabitacionesByDateComponent } from './habitacion/buscarHabitacionesByDate';
import { DetalleHabitacionComponent } from './habitacion/habitacionDetalle.component';
import { RegistrarUsuarioComponent } from './usuario/registrarUsuario.component';
import { ReservaHabitacionComponent } from './reserva/reservaHabitacion.component';
import { ResumenReservaComponent } from './resumenReserva/resumenReserva.component';
import { NavBarComponent } from './navBar/navBar.component';
import { ReporteOneComponent } from './reporte/reporteOne.component';
import { ReporteSecondComponent } from './reporte/reporteSecond.component';

//foro
import { RegistrarCommentsComponent } from './comments/registrarComments.Component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UsuarioServicios } from './usuario/servicio.usuario';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { LoginService } from './login/login.service';
import { MatTabsModule } from '@angular/material/tabs';
import { ComidaComponent } from './comida/comida.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CommentsServicio } from './comments/servicio.comments';
import { ReporteServicio } from './reporte/servicioReporte';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PasarelaComponent } from './pasarelaPago/pasarela.component';
import { PasarelaServicios } from './pasarelaPago/servicio.pasarela';


//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.component';''
import {RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md'

//Http
import { HttpModule } from '@angular/http'; 
import { MatNativeDateModule } from '@angular/material';
import { Usuario } from './login/usuario';
import { HabitacionGaleriaComponent } from './habitacionGaleria/habitacionGaleria.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    BuscarHabitacionByFechaComponent,
    BuscarHabitacionesByDateComponent,
    DetalleHabitacionComponent,
    RegistrarUsuarioComponent,
    ReservaHabitacionComponent,
    LoginComponent,
    ComidaComponent,
    RegistrarCommentsComponent,
    PasarelaComponent,
    HabitacionGaleriaComponent,
    ResumenReservaComponent,
    NavBarComponent,
    ReporteOneComponent,
    ReporteSecondComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MatTabsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'appComponent', component: AppComponent},
      {path: 'menu', component: NavBarComponent},
      {path: 'home', component: HomeComponent},
      {path: 'comida', component: ComidaComponent},
      {path: 'pago', component: PasarelaComponent},
      {path: 'comentarios', component: RegistrarCommentsComponent},
      {path: 'galeria', component: HabitacionGaleriaComponent},
      {path: 'buscarHabitacion', component: BuscarHabitacionesByDateComponent},
      {path: 'reservaHabitacion', component: ReservaHabitacionComponent},
      {path: 'reservaHabitacion/:id', component: ReservaHabitacionComponent},
      {path: 'reservaHabitacion/:id/:nombre', component: ReservaHabitacionComponent},
      {path: 'detalleHabitacion/:id', component: DetalleHabitacionComponent},
      {path: 'registrarUsuario', component: RegistrarUsuarioComponent},
      {path: 'buscarHabitacion/:fecha1/:fecha2', component: BuscarHabitacionesByDateComponent},
      {path: 'login', component: LoginComponent}, 
      {path: 'registrarComments', component: RegistrarCommentsComponent },
      {path: 'resumenReserva', component: ResumenReservaComponent },
      {path: 'reporte1', component: ReporteOneComponent },
      {path: 'reporte2', component: ReporteSecondComponent } 
      //{path: 'buscarHabitacion', component: BuscarHabitacionByPrecioComponent}
    ])
  ],
  schemas: [NO_ERRORS_SCHEMA], 
   
  providers: [
    HabitacionServicio,
    ReservaHabitacionServicio,
    LoginService,
    UsuarioServicios,
    CommentsServicio, 
    PasarelaServicios,
    Usuario,
    ReporteServicio
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuscarHabitacionByPrecioComponent } from './habitacion/buscarHabitacionByPrecio';
import { HabitacionServicio } from './habitacion/servicio.habitacion';
import { ReservaHabitacionServicio } from './reserva/servicio.reservaHabitacion';
import { ListarHabitacionesComponent } from './habitacion/listarHabitaciones';
import { DetalleHabitacionComponent } from './habitacion/habitacionDetalle.component';
import { RegistrarUsuarioComponent } from './usuario/registrarUsuario.component';
import { ReservaHabitacionComponent } from './reserva/reservaHabitacion.component';
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
//foro
import { CommentsServicio } from './comments/servicio.comments';

//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.component';''
import {RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md'

//Http
import { HttpModule } from '@angular/http'; 
import { MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    BuscarHabitacionByPrecioComponent,
    ListarHabitacionesComponent,
    DetalleHabitacionComponent,
    RegistrarUsuarioComponent,
    ReservaHabitacionComponent,
    LoginComponent,
    ComidaComponent,
    RegistrarCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MDBBootstrapModule.forRoot(),
    MatTabsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'appComponent', component: AppComponent},
      {path: 'home', component: HomeComponent},
      {path: 'comida', component: ComidaComponent},
      {path: 'listarHabitaciones', component: ListarHabitacionesComponent},
      {path: 'reservaHabitacion', component: ReservaHabitacionComponent},
      {path: 'reservaHabitacion/:id', component: ReservaHabitacionComponent},
      {path: 'reservaHabitacion/:id/:nombre', component: ReservaHabitacionComponent},
      {path: 'detalleHabitacion/:id', component: DetalleHabitacionComponent},
      {path: 'registrarUsuario', component: RegistrarUsuarioComponent},
      {path: 'buscarHabitacion/:precio1/:precio2', component: BuscarHabitacionByPrecioComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registrarComments', component: RegistrarCommentsComponent }
      //{path: 'buscarHabitacion', component: BuscarHabitacionByPrecioComponent}
    ])
  ],
  schemas: [NO_ERRORS_SCHEMA],
  
  providers: [
    HabitacionServicio,
    ReservaHabitacionServicio,
    LoginService,
    UsuarioServicios,
    CommentsServicio
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }

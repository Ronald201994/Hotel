import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuscarHabitacionByPrecioComponent } from './habitacion/buscarHabitacionByPrecio';
import { HabitacionServicio } from './habitacion/servicio.habitacion';
import { ReservaHabitacionServicio } from './reserva/servicio.reservaHabitacion';
import { ListarHabitacionesComponent } from './habitacion/listarHabitaciones';
import { DetalleHabitacionComponent } from './habitacion/habitacionDetalle.component';
import { RegistrarUsuarioComponent } from './usuario/registrarUsuario.component';
import { ReservaHabitacionComponent } from './reserva/reservaHabitacion.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UsuarioService } from './login/usuario.service'

//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.component';''
import {RouterModule } from '@angular/router';

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
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'listarHabitaciones', component: ListarHabitacionesComponent},
      {path: 'reservaHabitacion', component: ReservaHabitacionComponent},
      {path: 'reservaHabitacion/:id', component: ReservaHabitacionComponent},
      {path: 'detalleHabitacion/:id', component: DetalleHabitacionComponent},
      {path: 'registrarUsuario', component: RegistrarUsuarioComponent},
      {path: 'buscarHabitacion/:precio1/:precio2', component: BuscarHabitacionByPrecioComponent},
      {path: 'login', component: LoginComponent}
      //{path: 'buscarHabitacion', component: BuscarHabitacionByPrecioComponent}
    ])
  ],
  
  providers: [
    HabitacionServicio,
    ReservaHabitacionServicio,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

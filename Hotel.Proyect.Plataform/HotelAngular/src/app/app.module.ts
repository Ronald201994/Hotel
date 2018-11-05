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
import {MatDatepickerModule} from '@angular/material/datepicker';

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
    ReservaHabitacionComponent

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
      {path: 'buscarHabitacion/:precio1/:precio2', component: BuscarHabitacionByPrecioComponent}
      //{path: 'buscarHabitacion', component: BuscarHabitacionByPrecioComponent}
    ])
  ],
  providers: [
    HabitacionServicio,
    ReservaHabitacionServicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

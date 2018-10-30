import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuscarHabitacionByPrecioComponent } from './habitacion/buscarHabitacionByPrecio';
import { HabitacionServicio } from './habitacion/servicio.habitacion';
import { ListarHabitacionesComponent } from './habitacion/listarHabitaciones';
import { DetalleHabitacionComponent } from './habitacion/habitacionDetalle.component';
import { ReservaHabitacionComponent } from './reserva/reservaHabitacion.component';
import { FormsModule } from '@angular/forms';

//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.component';''
import {RouterModule } from '@angular/router';

//Http
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    BuscarHabitacionByPrecioComponent,
    ListarHabitacionesComponent,
    DetalleHabitacionComponent,
    ReservaHabitacionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'listarHabitaciones', component: ListarHabitacionesComponent},
      {path: 'reservaHabitacion', component: ReservaHabitacionComponent},
      {path: 'detalleHabitacion/:id', component: DetalleHabitacionComponent},
      {path: 'buscarHabitacion/:precio1/:precio2', component: BuscarHabitacionByPrecioComponent}
      //{path: 'buscarHabitacion', component: BuscarHabitacionByPrecioComponent}

    ])
  ],
  providers: [
    HabitacionServicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

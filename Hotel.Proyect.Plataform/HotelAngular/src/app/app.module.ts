import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuscarHabitacionByPrecioComponent } from './habitacion/buscarHabitacionByPrecio';
import { HabitacionServicio } from './habitacion/servicio.habitacion';
import { ListarHabitacionesComponent } from './habitacion/listarHabitaciones';

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
    ListarHabitacionesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'listarHabitaciones', component: ListarHabitacionesComponent},
      {path: 'buscarHabitacion', component: BuscarHabitacionByPrecioComponent}
    ])
  ],
  providers: [
    HabitacionServicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

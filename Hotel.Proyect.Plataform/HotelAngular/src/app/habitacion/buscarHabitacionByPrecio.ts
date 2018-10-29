import { Component } from '@angular/core';
import {HabitacionServicio } from './servicio.habitacion';
import {Habitacion } from './habitacion';

@Component({
    selector: 'app-habitacionPrecio',
    templateUrl: './buscarHabitacionByPrecio.html'
})
export class BuscarHabitacionByPrecioComponent {
    habitacion : Habitacion[];
    precio1 : number=0;
    precio2 : number=0;

    constructor(private _habitacionServicio: HabitacionServicio){
        this._habitacionServicio.GetHabitacionByPrecio()
        .subscribe(
            habitacionRespones => this.habitacion = habitacionRespones
        );
    }

    buscarHabitacionesByPrecio(){

    }
}
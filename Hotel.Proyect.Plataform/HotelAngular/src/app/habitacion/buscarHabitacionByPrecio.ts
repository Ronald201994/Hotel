import { Component } from '@angular/core';
import {HabitacionServicio } from './servicio.habitacion';
import {Habitacion } from './habitacion';

@Component({
    selector: 'app-habitacionPrecio',
    templateUrl: './buscarHabitacionByPrecio.html'
})
export class BuscarHabitacionByPrecioComponent {
    habitacion : Habitacion[];

    constructor(private _habitacionServicio: HabitacionServicio){
        this._habitacionServicio.GetHabitacionByPrecio()
        .subscribe(
            habitacionRespones => this.habitacion = habitacionRespones
        );
    }
}
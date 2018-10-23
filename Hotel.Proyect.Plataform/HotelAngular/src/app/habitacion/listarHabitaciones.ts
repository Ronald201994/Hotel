import { Component } from '@angular/core';
import {HabitacionServicio } from './servicio.habitacion';
import {Habitacion } from './habitacion';

@Component({
    selector: 'listar-habitaciones',
    templateUrl: './ListarHabitaciones.html'
})
export class ListarHabitacionesComponent {
    habitaciones : Habitacion[];

    constructor(private _habitacionServicio: HabitacionServicio){
        this._habitacionServicio.GetHabitaciones()
        .subscribe(
            habitacionResponse => this.habitaciones = habitacionResponse
        );
    }
}
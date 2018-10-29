import { Component } from '@angular/core';
import { HabitacionServicio } from './servicio.habitacion';
import { Habitacion } from './habitacion';
import { Router } from '@angular/router';

@Component({
    selector: 'listar-habitaciones',
    templateUrl: './ListarHabitaciones.html'
})
export class ListarHabitacionesComponent {
    habitaciones : Habitacion[];

    constructor(private _habitacionServicio: HabitacionServicio, private _router: Router){
        this._habitacionServicio.GetHabitaciones()
        .subscribe(
            habitacionResponse => this.habitaciones = habitacionResponse
        );
    }

    verDetalleHabitacion(ID: number){
        alert("El cliente eligió la habitacipon: "+ID);
        this._router.navigate(['detalleHabitacion/'+ID]);
    }
}
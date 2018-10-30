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
    IdHabitacion : Number;

    constructor(private _habitacionServicio: HabitacionServicio, private _router: Router){
        this._habitacionServicio.GetHabitaciones()
        .subscribe(
            habitacionResponse => this.habitaciones = habitacionResponse
        );
    }

    verDetalleHabitacion(ID: number){
        this._router.navigate(['detalleHabitacion/'+ID]);
    }

    irMetodoToGetListadoHabitacionByPrice(precio1 : number, precio2){
       this._router.navigate(['buscarHabitacion/'+precio1+'/'+precio2]);
    }

}
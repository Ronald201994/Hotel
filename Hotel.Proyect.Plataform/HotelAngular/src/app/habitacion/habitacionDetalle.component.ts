import { Component } from '@angular/core';
import {HabitacionServicio } from './servicio.habitacion';
import {Habitacion } from './habitacion';
import { Router } from '@angular/router';

@Component({
    selector: 'app-detalleHabitacion',
    templateUrl: './habitacionDetalle.component.html'
})
export class DetalleHabitacionComponent {

    constructor(private _router : Router){

    }

    regresarListaHabitaciones() : void{
        this._router.navigate(['/listarHabitaciones']);
    } 
}
import { Component } from '@angular/core';
import {HabitacionServicio } from './servicio.habitacion';
import {Habitacion } from './habitacion';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-habitacionPrecio',
    templateUrl: './buscarHabitacionByPrecio.html'
})
export class BuscarHabitacionByPrecioComponent {
    habitaciones : Habitacion[];
    precio1 : number;
    precio2 : number;
    
    constructor(private _habitacionServicio: HabitacionServicio, private _router : Router, private route: ActivatedRoute ){
        this.precio1 = this.route.snapshot.params.precio1;
        this.precio2 = this.route.snapshot.params.precio2;

        this._habitacionServicio.GetHabitacionByPrecio(this.precio1, this.precio2)
        .subscribe(
            habitacionRespones => this.habitaciones = habitacionRespones
        );
    }
    
    verDetalleHabitacion(ID: number){
        this._router.navigate(['detalleHabitacion/'+ID]);
    }

    regresarListaHabitaciones() : void{
        this._router.navigate(['/listarHabitaciones']);
    } 

    /*buscarHabitacionesByPrecio(){
        this._habitacionServicio.GetHabitacionByPrecio(this.precio1, this.precio2)
        .subscribe(
            habitacionRespones => this.habitaciones = habitacionRespones
        );
        this._router.navigate(['/buscarHabitacion']);
    }*/
}
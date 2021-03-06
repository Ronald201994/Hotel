import { Component } from '@angular/core';
import {HabitacionServicio } from './servicio.habitacion';

import { Router, ActivatedRoute } from '@angular/router';
import { Habitacion } from './habitacion';

@Component({
    selector: 'app-detalleHabitacion',
    templateUrl: './habitacionDetalle.component.html'
})
export class DetalleHabitacionComponent {
    habitaciones : Habitacion[];
    id : number;
    hidenButon: boolean;

    constructor(private _habitacionServicio: HabitacionServicio, private _router : Router, private route: ActivatedRoute){
        this.id = this.route.snapshot.params.id;

        this._habitacionServicio.GetHabitacionByID(this.id)
        .subscribe(
            habitacionRespones => {this.habitaciones = habitacionRespones; 
                                   localStorage.setItem("idHabitacion", this.id.toString());
                                   localStorage.setItem("tipo", this.habitaciones[0].Tipo);
                                   localStorage.setItem("precio", this.habitaciones[0].Precio.toString());
                                   localStorage.setItem("numHabitacion", this.habitaciones[0].Nombre)}
        );
    }

    regresarListaHabitaciones() : void{
        this._router.navigate(['/listarHabitaciones']);
    } 

    irReservar(){
        if (this.habitaciones[0].Estado == 'Ocupado'){
            alert('La habitación está reservado.');
        }else{
            this._router.navigate(['reservaHabitacion/'+this.id]);
        }
    }

    cancelar(){
        this._router.navigate(['/home']);
    }
}
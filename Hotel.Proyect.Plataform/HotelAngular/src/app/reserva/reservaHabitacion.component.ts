import { Component } from '@angular/core';
import { Habitacion } from '../habitacion/habitacion';
import { HabitacionServicio } from '../habitacion/servicio.habitacion';
import { Route, ActivatedRoute } from '@angular/router';
import { ReservaHabitacion } from './reservaHabitacion';
import { ReservaHabitacionServicio } from './servicio.reservaHabitacion';

@Component({
    selector: 'app-reserva-habitacion',
    templateUrl: './reservaHabitacion.component.html' ,
    styleUrls: ['./reservaHabitacion.component.css']
})
export class ReservaHabitacionComponent {
    id : number;
    fechaIngreso: string;
    fechaSalida: string

    reservaHabitacion: ReservaHabitacion = null;

    constructor(private route: ActivatedRoute, private _reservaHabitacionServicio: ReservaHabitacionServicio){
        this.id = this.route.snapshot.params.id;
        this.reservaHabitacion = <ReservaHabitacion>{
            IdHabitacion: this.id,
            IdUsuario: "",
            FechaIngreso: "",
            FechaSalida: ""               
        };
    }

    registrarReservaHabitacion(): void{
        var registroReservaHabitacion = this._reservaHabitacionServicio.registrarReservaHabitacion(this.reservaHabitacion)
        .subscribe();
    }
}
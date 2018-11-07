import { Component } from '@angular/core';
import { Habitacion } from '../habitacion/habitacion';
import { HabitacionServicio } from '../habitacion/servicio.habitacion';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { ReservaHabitacion } from './reservaHabitacion';
import { ReservaHabitacionServicio } from './servicio.reservaHabitacion';

@Component({
    selector: 'app-reserva-habitacion',
    templateUrl: './reservaHabitacion.component.html' ,
    styleUrls: ['./reservaHabitacion.component.css']
})
export class ReservaHabitacionComponent {
    id : number;
    IdUsuario: number;
    fechaIngreso: string;
    fechaSalida: string;

    startDate = new Date(1990, 0, 1);

    reservaHabitacion: ReservaHabitacion = null;

    constructor(private route: ActivatedRoute, private _reservaHabitacionServicio: ReservaHabitacionServicio, private _router: Router){
        this.id = this.route.snapshot.params.id;
        this.IdUsuario = this.route.snapshot.params.idUsuario;

        this.reservaHabitacion = <ReservaHabitacion>{
            IdHabitacion: this.id,
            IdUsuario: this.IdUsuario,
            FechaIngreso: "",
            FechaSalida: ""               
        };
    }

    registrarReservaHabitacion(): void{
        var registroReservaHabitacion = this._reservaHabitacionServicio.registrarReservaHabitacion(this.reservaHabitacion)
        .subscribe();
    }

    irToListarHabitaciones(){
        this._router.navigate(['/listarHabitaciones']);
    }
}
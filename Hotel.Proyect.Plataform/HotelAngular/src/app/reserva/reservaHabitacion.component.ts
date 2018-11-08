import { Component } from '@angular/core';
import { Habitacion } from '../habitacion/habitacion';
import { HabitacionServicio } from '../habitacion/servicio.habitacion';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { ReservaHabitacion } from './reservaHabitacion';
import { ReservaHabitacionServicio } from './servicio.reservaHabitacion';
import { Usuario } from '../login/usuario';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    hidden: boolean = false;

    idFromLocalS: string;

    usuario: Usuario[];
    idUser: string;
    nameUser: string;
    apePat: string;
    apeMat: string;
    idHabitacionStorage: string;
    numHabitacionStorage: string;

    /*console.log(users);
    console.log(name);*/

    startDate = new Date(1990, 0, 1);

    reservaHabitacion: ReservaHabitacion = null;

    constructor(private route: ActivatedRoute, private _reservaHabitacionServicio: ReservaHabitacionServicio, private _router: Router){
        this.id = this.route.snapshot.params.id;

        //this.usuario = JSON.parse(localStorage.getItem("dataUser"));
        this.idUser = localStorage.getItem("idUser");
        this.nameUser = localStorage.getItem("nameUser");
        this.apePat = localStorage.getItem("apePat");
        this.apeMat = localStorage.getItem("apeMat");
        this.idHabitacionStorage = localStorage.getItem("idHabitacion");
        this.numHabitacionStorage = localStorage.getItem("numHabitacion")

        this.reservaHabitacion = <ReservaHabitacion>{
            IdHabitacion: this.idHabitacionStorage,
            IdUsuario: this.idUser,
            NombreUsurario: this.nameUser,
            ApePatUsurario: this.apePat,
            ApeMatUsurario: this.apeMat,
            NumerHabitacion: this.numHabitacionStorage,
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
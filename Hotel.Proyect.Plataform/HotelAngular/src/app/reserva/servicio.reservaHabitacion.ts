import { Injectable } from "@angular/core";
import { ReservaHabitacion } from "./reservaHabitacion";
import { Http, Response } from "@angular/http";
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class ReservaHabitacionServicio{
    private _registrarReservaHabitacionURL: string = "http://localhost:55349/api/habitacion/reservaHabitacion";

    constructor(private _http: Http){

    }

    reservaHabitacion: ReservaHabitacion = null;

    registrarReservaHabitacion(reservaHabitacion: ReservaHabitacion): Observable<ReservaHabitacion>{
        var body ={
            idHabitacion: reservaHabitacion.IdHabitacion,
            idUsuario: reservaHabitacion.IdUsuario,
            fechaIngreso: reservaHabitacion.FechaIngreso,
            fechaSalida: reservaHabitacion.FechaSalida
        };
        var request = this._http.post(this._registrarReservaHabitacionURL, body);

        return request.pipe(map((response: Response) => <ReservaHabitacion> response.json()),
            catchError(error => {
                return throwError("Server error");
            })
        )
    }
}


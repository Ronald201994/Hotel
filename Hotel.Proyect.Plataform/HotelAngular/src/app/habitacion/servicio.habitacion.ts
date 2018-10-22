import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Habitacion } from './habitacion';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class HabitacionServicio {
    private _getHabitacionesByPrecioURL : string = 'http://localhost:55349/api/Habitacion/GetHabitacionByPrecio';
    private _getHabitacionesURL : string = 'http://localhost:55349/api/Habitacion/ListarHabitaciones';

    constructor(private _http: Http){
    }
    
    habitacion : Habitacion[];

    GetHabitaciones() : Observable<Habitacion[]>{
        return this._http.get(this._getHabitacionesURL)
        .pipe(map((response: Response) => response.json()),
        catchError(error => {
            return throwError("Server error");
        }))       
    }

    GetHabitacionByPrecio() : Observable<Habitacion[]> { 
        return this._http.get(this._getHabitacionesByPrecioURL)
        .pipe(map((response: Response) => <Habitacion[]> response.json()),
        catchError(error => {
            return throwError("Server error");
        }))            
    }
}


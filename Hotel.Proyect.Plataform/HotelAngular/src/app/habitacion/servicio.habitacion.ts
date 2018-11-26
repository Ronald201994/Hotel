import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Habitacion } from './habitacion';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class HabitacionServicio {
    private _getHabitacionesByFechaURL : string = 'http://localhost:55349/api/habitacion/BuscarHabitacionByFecha?';
    private _getHabitacionesURL : string = 'http://localhost:55349/api/Habitacion/ListarHabitaciones';
    private _getHabitacionesByIdURL : string = 'http://localhost:55349/api/habitacion/GetHabitacionById?';

    constructor(private _http: Http){
    }
    
    habitacion : Habitacion[];

    GetHabitacionByFecha(fecha1: string, fecha2: string) : Observable<Habitacion[]> { 
        //return this._http.get(this._getHabitacionesByFechaURL+'fecha1='+fecha1+'&fecha2='+fecha2)
        return this._http.get('http://localhost:55349/api/habitacion/BuscarHabitacionByFecha?fecha1='+fecha1+'&fecha2='+fecha2)
        .pipe(map((response: Response) => <Habitacion[]> response.json()),
            catchError(error => { 
                return throwError("Server error");
            })
        ) 
    }

    GetHabitacionByID(ID : number) : Observable<Habitacion[]> { 
        return this._http.get(this._getHabitacionesByIdURL+'Id='+ID)
        .pipe(map((response: Response) => <Habitacion[]> response.json()),
            catchError(error => {
                return throwError("Server error");
            }) 
        ) 
    }

    GetHabitaciones() : Observable<Habitacion[]>{
        return this._http.get(this._getHabitacionesURL)
        //.pipe(map((response: Response) => response.json()),
        .pipe(map((response: Response) => <Habitacion[]> response.json()),
            catchError(error => {
                return throwError("Server error");
            })
        )       
    }

    private controlarExecption(error : Response){
        console.log("error", error);
        return Observable.throw(error.json().error || "Server error");
    }

}


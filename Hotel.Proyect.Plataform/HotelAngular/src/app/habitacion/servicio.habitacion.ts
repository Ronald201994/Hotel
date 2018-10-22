import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Habitacion } from './habitacion';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class HabitacionServicio {
    private _getHabitacionesByPrecioURL : string = 'http://localhost:55349/api/Habitacion/GetHabitacionByPrecio';
    private _getHabitacionesURL : string = 'http://localhost:55349/api/Habitacion/ListaHabitaciones';

    constructor(private _http: Http){
    }
    
    habitacion : Habitacion[];

    GetHabitacionByPrecio() : Observable<Habitacion[]> { 
        return this._http.get(this._getHabitacionesByPrecioURL)
            .map((response: Response) => <Habitacion[]> response.json())
            .catch(this.controlarExecption)
    }

    GetHabitaciones() : Observable<Habitacion[]>{
        return this._http.get(this._getHabitacionesURL)
            .map((response: Response) => <Habitacion[]> response.json())
            .catch(this.controlarExecption)
    }

    private controlarExecption(error : Response){
        console.log("error", error);
        return Observable.throw(error.json().error || "Server error");
    }

}


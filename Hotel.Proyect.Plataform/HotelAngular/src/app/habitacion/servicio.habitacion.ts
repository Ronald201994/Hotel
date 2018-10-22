import { Habitacion } from "./habitacion";
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class HabitacionServicio {
    private _getHabitacionesURL: string = 'http://localhost:55349/api/Habitacion/GetHabitacionByPrecio';

    constructor(private _http: Http){
    }
    
    habitacion : Habitacion[];

    GetHabitacionByPrecio() : Observable<Habitacion[]>{
        return this._http.get(this._getHabitacionesURL)
            .map((response: Response) => <Habitacion[]> response.json())
            .catch(this.controlarExecption)
    }

    private controlarExecption(error : Response){
        console.log("error", error);
        return Observable.throw(error.json().error || "Server error");
    }

}


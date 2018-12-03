import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { ReservaMes } from './ReservasMes';
import { ReservasHabitacion } from './reservasHabitacion';

@Injectable()
export class ReporteServicio {
    private _getReporteOneURL : string = 'http://localhost:55349/api/reporte/RepHabitacionMasUsada';
    private _getReporteSecondURL : string = 'http://localhost:55349/api/reporte/RepReservasMes';


    constructor(private _http: Http){
    }
    
    reservasHabitacion : ReservasHabitacion[];
    reservasMes: ReservaMes[];

    GetRepHabitacionUsadas() : Observable<ReservasHabitacion[]>{
        return this._http.get(this._getReporteOneURL)
        //.pipe(map((response: Response) => response.json()),
        .pipe(map((response: Response) => <ReservasHabitacion[]> response.json()),
            catchError(error => {
                return throwError("Server error");
            })
        )       
    }

    GetRepReservasMes() : Observable<ReservaMes[]>{
        return this._http.get(this._getReporteSecondURL)
        //.pipe(map((response: Response) => response.json()),
        .pipe(map((response: Response) => <ReservaMes[]> response.json()),
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




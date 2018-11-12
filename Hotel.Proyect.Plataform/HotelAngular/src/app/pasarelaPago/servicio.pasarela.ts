import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Pasarela } from './pasarela';

@Injectable()
export class PasarelaServicios {
    private _pasarelaURL : string = 'http://localhost:55349/api/Pago/ValidarPago'
    constructor(private _http: Http){

    }
    usuario : Pasarela = null;

    ingresePasarela (pasarela : Pasarela): Observable<Pasarela>{
        var body = {
            numeroTarjeta : pasarela.NumeroTarjeta,
            tipoTarjeta : pasarela.TipoTarjeta,
            codigoSeguridadTarjeta : pasarela.CodigoSeguridadTarjeta,
            titularTarjeta : pasarela.TitularTarjeta,
            mesExpiracionTarjeta : pasarela.MesExpiracionTarjeta,
            añoExpiracionTarjeta : pasarela.AñoExpiracionTarjeta,
            montoConsumir : pasarela.MontoConsumir
        };

        var request = this._http.post(this._pasarelaURL, body);

        return request.pipe(map((response : Response) => <Pasarela> response.json()),
        catchError(error => {
            return throwError("Server Error")
        })
        )
    }
}
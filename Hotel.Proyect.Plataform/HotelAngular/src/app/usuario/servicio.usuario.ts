import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class UsuarioServicios {

    private _getRegistrarUsuarioURL : string = 'http://localhost:55349/api/Usuario/ingresarUsuario'

    usuario : Usuario = null;

    constructor(private _http: Http) {
        console.log("service usuario");
    }

    registrarUsuario(usuario: Usuario): Observable<Usuario> {

        var body = {
            DNI : usuario.DNI,
            Nombre : usuario.Nombre,
            ApellidoPaterno : usuario.ApellidoPaterno,
            ApellidoMaterno : usuario.ApellidoMaterno,
            Correo : usuario.Correo,
            Password : usuario.Password
        };

        var req = this._http.post(this._getRegistrarUsuarioURL,body);
        return req.pipe(map((response: Response) => response.json()),
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
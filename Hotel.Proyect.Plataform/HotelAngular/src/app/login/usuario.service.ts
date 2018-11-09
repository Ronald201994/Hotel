import { Usuario } from "./usuario";
import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class UsuarioService {
    private _gertLoginUsuarioURL : string = 'http://localhost:55349/api/usuario/Login?'
    idUs: string;

    constructor(private _http: Http) {
            
    }

    //usuario: Usuario = null;

    usuario : Usuario[];
    
    ingreseUsuario(correo : string, contrasena : string) : Observable<Usuario[]> { 
        return this._http.get(this._gertLoginUsuarioURL+'correo='+correo+'&contrasena='+contrasena)
        .pipe(map((response: Response) => <Usuario[]> response.json()), 
            catchError(error => {
                return throwError("Server error"); 
            })   
        )       
    }

    
    /*usuario : Usuario = null;
    login(usuario : Usuario) : Usuario{
        
        //proposito de test
        this.usuario = null;

        //si es usuario administrador
        if(usuario.userName == "liz@outlook.com" && usuario.password == "2018*qw"){
            this.usuario = usuario;
            this.usuario.esAdmin = true;
        }

        //si es un empleado cualquiera
        if(usuario.userName == "eren@gmail.com" && usuario.password == "eren123"){
            this.usuario = usuario;
            this.usuario.esAdmin=false;
        }

        return this.usuario;
        
    }*/

   /* getUsuario() : Usuario {
        return this.usuario;
    }*/


    logout() : void{
        this.usuario = null;
    }
}
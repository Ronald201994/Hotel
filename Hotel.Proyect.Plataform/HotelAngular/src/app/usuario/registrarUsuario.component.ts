import { Component } from '@angular/core';
import { Usuario } from './usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioServicios } from './servicio.usuario';


@Component({
    selector: 'app-registrar-usuario',
    templateUrl: './registrarUsuario.component.html',
    styleUrls: ['./registrarUsuario.component.css']

})

export class RegistrarUsuarioComponent {

    usuario: Usuario = null;

    constructor(private _registrarUsuario: UsuarioServicios){
        
        this.usuario = <Usuario>{
            DNI: "",
            Nombre: "",
            ApellidoPaterno: "",
            ApellidoMaterno: "",
            Correo: "",
            Password: ""
        };
    }

    ingreseUsuario(): void{
        var registrarUsuario= this._registrarUsuario.ingreseUsuario(this.usuario)
        .subscribe();
    }
  
}


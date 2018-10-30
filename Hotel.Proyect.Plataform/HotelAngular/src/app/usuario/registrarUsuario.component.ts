import { Component } from '@angular/core';
import { UsuarioServicios } from './servicio.usuario';
import { Usuario } from './usuario';

@Component({
    selector: 'app-registrarUsuario',
   
    templateUrl: './registrarUsuario.component.html'
})
export class RegistrarUsuarioComponent {
    usuario : Usuario = null;
    constructor(private _registrarUsuario : UsuarioServicios, private _router : Router ){
        this.usuario = <Usuario> {
        
        }
    }

    registrarUsuario() : void {
        var registrarUsuario = this._registrarUsuario.registrarUsuario(this.usuario);

        if (registrarUsuario == null) {
            alert("Usuario no se registro");
        }
        else {
            this._router.navigate(["Registro exitoso/"]);
        }
    }


    
}

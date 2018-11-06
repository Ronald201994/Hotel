import { Component } from "@angular/core";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario";
import { Router } from "@angular/router";

@Component({
    selector : 'login',
    templateUrl: './login.component.html'

})

export class LoginComponent {
    usuario : Usuario = null;
    constructor(private _userService : UsuarioService,
                private _router : Router){
        this.usuario = <Usuario> {
            userName : "",
            password : ""
        };
    }
    

    ingresar() : void {
       


        var usuarioRegistrado = this._userService.login(this.usuario);
        if(usuarioRegistrado == null){
            alert("Usuario no registrado");
        }else{
            this._router.navigate(['home/'])
        }
    } 

    borrar() : void {
        this.usuario.userName = "";
        this.usuario.password = "";
    }

}
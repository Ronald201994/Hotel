import { Component } from "@angular/core";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario";
import { Router } from "@angular/router";

@Component({
    selector : 'login',
    templateUrl: './login.component.html'

})

export class LoginComponent {
    usuario : Usuario[];
    constructor(private _userService : UsuarioService,
                private _router : Router){
        /*this.usuario = <Usuario> {
            userName : "",
            password : ""
        };*/
    }
    
    ingresar(correo: string, contrasena: string){
        this._userService.ingreseUsuario(correo, contrasena)
        .subscribe(
            habitacionRespones => this.usuario = habitacionRespones
        );

        this._router.navigate(['reservaHabitacion/'+this.usuario[0].IdHabitacion+'/'+this.usuario[0].Nombre]);


        //this._router.navigate(['buscarHabitacion/'+precio1+'/'+precio2]);
     }

    /*ingresar() : void {
       


        var usuarioRegistrado = this._userService.login(this.usuario);
        if(usuarioRegistrado == null){
            alert("Usuario no registrado");
        }else{
            this._router.navigate(['home/'])
        }
    }*/ 

    /*borrar() : void {
        this.usuario.userName = "";
        this.usuario.password = "";
    }*/

}
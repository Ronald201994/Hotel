import { Component } from "@angular/core";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario";
import { Router } from "@angular/router";
import { stringify } from "@angular/compiler/src/util";

@Component({
    selector : 'login',
    templateUrl: './login.component.html'

})

export class LoginComponent {
    usuario: Usuario[];
    error: string;

    constructor(private _userService : UsuarioService,
                private _router : Router){
        /*this.usuario = <Usuario> {
            userName : "",
            password : ""
        };*/

    }
    
    ingresar(correo: string, contrasena: string){
        if(this.validarLoginVacio(correo, contrasena)==false){
            alert(this.error);
        }
        var usu = this._userService.ingreseUsuario(correo, contrasena)
        .subscribe(
            data => { this.usuario = data;}
        );
        localStorage.setItem('Token', this.usuario[0].ID);
     }
    
    private validarLoginVacio(correo: string, contrasena: string): boolean{
        let validacionSucces = false;
        if(correo == undefined || correo.trim()==""){
            this.error = "Escriba su correo";
        }
        else if(contrasena == undefined || contrasena.trim()==""){
            this.error = "Escriba su contraseña";        
        }
        else if(correo == undefined || correo.trim()=="" && contrasena == undefined || contrasena.trim()=="")
            this.error = "Escriba su correo y contraseña"
        else{
            validacionSucces = true;
        }

        return validacionSucces;
    } 

    /*putLocalStorage(nombre: string, usuario: Usuario[]): void{
        localStorage.setItem(nombre, JSON.stringify(usuario));
    } /* 

    /* onLogin(form: NgForm) {
        if (form.valid) {
          return this.authService
            .loginuser(this.user.email, this.user.password)
            .subscribe(
            data => {
              this.authService.setUser(data.user);
              const token = data.id;
              this.authService.setToken(token);
              this.router.navigate(['/user/profile']);
              location.reload();
              this.isError = false;
            },
            error => this.onIsError()
            );
        } else {
          this.onIsError();
        }
    }*/

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
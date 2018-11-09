import { Component } from "@angular/core";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'

})

export class LoginComponent {
    usuario: Usuario[];
    error: string;
    navButton: boolean = true;

    constructor(private _userService: UsuarioService,
        private _router: Router) {
        /*this.usuario = <Usuario> {
            userName : "",
            password : ""
        };*/
        //localStorage.removeItem("idUser");
    }

    ingresar(correo: string, contrasena: string) {
        if (this.validarLoginVacio(correo, contrasena) == false) {
            alert(this.error);
        }
        else {
            this._userService.ingreseUsuario(correo, contrasena)
                .subscribe(
                    data => {
                    this.usuario = data;
                        this.putLocalStorage("idUser", this.usuario[0].ID)
                        this.putLocalStorage("nameUser", this.usuario[0].Nombre);
                        this.putLocalStorage("apePat", this.usuario[0].ApellidoPat);
                        this.putLocalStorage("apeMat", this.usuario[0].ApellidoMat);
                        console.log(this.usuario);
                    }, error => {
                        console.error(error);
                    },
                    () => this.irHome()
                );
          }

    }

    irHome(){
        this._router.navigate(['/home']);
    }

    continuarReserva(){
        this._router.navigate(['/reservaHabitacion']);
    }

    private validarLoginVacio(correo: string, contrasena: string): boolean {
        let validacionSucces = false;
        if (correo == undefined || correo.trim() == "") {
            this.error = "Escriba su correo";
        }
        else if (contrasena == undefined || contrasena.trim() == "") {
            this.error = "Escriba su contraseña";
        }
        else if (correo == undefined || correo.trim() == "" && contrasena == undefined || contrasena.trim() == "")
            this.error = "Escriba su correo y contraseña"
        else {
            validacionSucces = true;
        }

        return validacionSucces;
    }

    putLocalStorage(nombre: string, value: string): void {
        localStorage.setItem(nombre, value);
    }

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
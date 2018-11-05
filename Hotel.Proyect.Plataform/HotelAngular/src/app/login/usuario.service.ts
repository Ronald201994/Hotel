import { Usuario } from "./usuario";
import { Injectable } from "@angular/core";

@Injectable()
export class UsuarioService {
    usuario : Usuario = null;
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
    }

    getUsuario() : Usuario {
        return this.usuario;
    }

    logout() : void{
        this.usuario = null;
    }
}
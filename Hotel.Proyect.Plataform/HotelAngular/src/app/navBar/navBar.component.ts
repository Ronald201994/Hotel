import { Component } from '@angular/core';
import { Usuario } from '../login/usuario';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navBar',
    templateUrl: './navBar.component.html',
    styleUrls: ['./navBar.component.css'] 
})
export class NavBarComponent {
    nameUser: string = '';

  

  

    usuario : Usuario;
    salirButton: boolean = true;
  
    constructor(private _loginService : LoginService , private _router : Router, private _usu: Usuario){
      //this.nameUser = localStorage.getItem("nameUser");
      this.login(); 
    }
    login(){
    this.nameUser = this._loginService.getUserLoggedIn();
    }
  
    /*esAdministrador(): boolean{
      this.usuario = this._usuarioService.getUsuario();
      var esAdmin = false;
      if(this.usuario!=null){
        esAdmin = this.usuario.esAdmin;
      }
  
      
      return esAdmin;
    }*/
  
    currentUser: string = 'Bienvenido '+ this.nameUser;
    
    salir() : void{ 
      localStorage.removeItem("idUser");
      localStorage.removeItem("nameUser");
      localStorage.removeItem("apePat");
      localStorage.removeItem("apeMat");
      localStorage.removeItem("idHabitacion");
      localStorage.removeItem("numHabitacion");
      this.nameUser = "";
      this.salirButton = false;
      this._router.navigate(['home/'])
    }
  
    existeUsuario() : boolean {
      return this.usuario !=null;
    }
}
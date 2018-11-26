import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { Usuario } from './login/usuario';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

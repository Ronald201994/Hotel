import { Component, OnInit } from '@angular/core';
import { Usuario } from '../login/usuario';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit{
  subscription: Subscription;
  subscriptionPermiso : Subscription;

  constructor(private _loginService: LoginService, private _router: Router, private _usu: Usuario) {
    //this.nameUser = localStorage.getItem("nameUser");
    this.subscription = this._loginService.getMessage().subscribe(message => 
      { 
        this.nameUser = message.text; 
      });

      this.subscriptionPermiso = this._loginService.getPermiso().subscribe(message => 
        { 
          if(message.text == 'true'){
            this.esAdmi = true;
          }
          else{
            this.esAdmi = false;
          }
        });

    this.login();
  }
  
  ngOnInit(): void {

    
    if(localStorage.getItem('isAdmin') == 'true'){
      this.esAdmi = true;
    }
    else{
      this.esAdmi = false;
    }
  }

  nameUser: string = '';
  usuario: Usuario;
  salirButton: boolean = true;
  esAdmi: boolean;

  
  login() {
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

  currentUser: string = 'Bienvenido ' + this.nameUser;

  salir(): void {
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

  existeUsuario(): boolean {
    return this.usuario != null;
  }
}
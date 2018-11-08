import { Component } from '@angular/core';
import { UsuarioService } from './login/usuario.service';
import { Usuario } from './login/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelAngular';

  usuario : Usuario;
  salirButton: boolean = true;

  constructor(private _usuarioService : UsuarioService , private _router : Router){
    
  }
  /*esAdministrador(): boolean{
    this.usuario = this._usuarioService.getUsuario();
    var esAdmin = false;
    if(this.usuario!=null){
      esAdmin = this.usuario.esAdmin;
    }

    
    return esAdmin;
  }*/
  salir() : void{ 
    localStorage.removeItem("idUser");
    localStorage.removeItem("nameUser");
    localStorage.removeItem("apePat");
    localStorage.removeItem("apeMat");
    localStorage.removeItem("idHabitacion");
    localStorage.removeItem("numHabitacion");
    
    this.salirButton = false;
    this._router.navigate(['home/'])
  }

  existeUsuario() : boolean {
    return this.usuario !=null;
  }

}

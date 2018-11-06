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
    this._usuarioService.logout();
    this._router.navigate(['home/'])
  }

  existeUsuario() : boolean {
    return this.usuario !=null;
  }

}

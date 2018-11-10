import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { Usuario } from "./usuario";
import { Router } from "@angular/router";
import * as $ from 'jquery'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.css']
})

export class LoginComponent implements OnInit{
    ngOnInit(): void {
        $(document).ready(function () {
            var navListItems = $('div.setup-panel div a'),
                    allWells = $('.setup-content'),
                    allNextBtn = $('.nextBtn');
          
            allWells.hide();
          
            navListItems.click(function (e) {
                e.preventDefault();
                var $target = $($(this).attr('href')),
                        $item = $(this);
          
                if (!$item.hasClass('disabled')) {
                    navListItems.removeClass('btn-primary').addClass('btn-default');
                    $item.addClass('btn-primary');
                    allWells.hide();
                    $target.show();
                    $target.find('input:eq(0)').focus();
                }
            });
          
            allNextBtn.click(function(){
                var curStep = $(this).closest(".setup-content"),
                    curStepBtn = curStep.attr("id"),
                    nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                    curInputs = curStep.find("input[type='text'],input[type='url']"),
                    isValid = true;
          
                $(".form-group").removeClass("has-error");
                for(var i=0; i<curInputs.length; i++){
                    if (!curInputs[i].validity.valid){
                        isValid = false;
                        $(curInputs[i]).closest(".form-group").addClass("has-error");
                    }
                }
          
                if (isValid)
                    nextStepWizard.removeAttr('disabled').trigger('click');
            });
          
            $('div.setup-panel div a.btn-primary').trigger('click');
          });
    }
    usuario: Usuario[];
    error: string;
    navButton: boolean = true;

    constructor(private _loginService: LoginService,
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
            this._loginService.ingreseUsuario(correo, contrasena)
                .subscribe(
                    data => {
                    this.usuario = data;
                        //this._loginService.setUserLoggedIn(this.usuario[0]);
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
        this._router.navigate(['/reservaHabitacion']);
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

    putLocalStorage(nombre: string, value: string): void  {
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
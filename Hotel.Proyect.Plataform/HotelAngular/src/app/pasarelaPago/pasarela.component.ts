import { Component } from '@angular/core';
import { PasarelaServicios } from './servicio.pasarela';
import { Pasarela } from './pasarela';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
    selector : '',
    templateUrl: './pasarela.component.html',
    styleUrls: ['./pago.css']
})

export class PasarelaComponent { 
    pasarela : Pasarela = null;
    mensaje = [];
    messageAler: string;


    //responsePago : ResponsePago;


    

    constructor(private _pasarelaServive: PasarelaServicios, private _router: Router){
        this.pasarela = <Pasarela>{
            NumeroTarjeta:"",
            TipoTarjeta:"",
            CodigoSeguridadTarjeta:"",
            TitularTarjeta:"",
            MesExpiracionTarjeta:"",
            AnioExpiracionTarjeta:"", 
            MontoConsumir:"",
            TransaccionCompleta: ""
        };
    }

    
    message: string = "";

    ingresePasarela(): void{
       
        this._pasarelaServive.ingresePasarela(this.pasarela)
        .subscribe(
            data => {
                if(!data.TransaccionCompleta){
                    this.mensaje.push(data);               
                    if (this.mensaje.length) {
                        for(let i = 0; i < this.mensaje.length; i++) {
                            this.message += `Message: ${this.mensaje[i].TransaccionMensaje}`;
                        }
                    }
                    swal("Pago exitoso!", this.messageAler, 'success');

                    this._router.navigate(['/reservaHabitacion']);
 
                    //message = JSON.stringify(this.mensaje);
                    /*obj = JSON.parse(message);
                    console.log(message);
                    console.log(obj);*/

                }
                else{
                    swal(this.message, this.messageAler, 'info');
                }
                
            }
        );
     
    }

}
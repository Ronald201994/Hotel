import { Component, OnInit } from '@angular/core';
import { PasarelaServicios } from './servicio.pasarela';
import { Pasarela } from './pasarela';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
    selector : '',
    templateUrl: './pasarela.component.html',
    styleUrls: ['./pago.css']
})

export class PasarelaComponent implements OnInit { 

    formPasarela : FormGroup;
    submitted = false;
      pasarela : Pasarela = null;
    mensaje = [];
    messageAler: string;
   
    ngOnInit(): void{
        this.formPasarela = this.formBuilder.group({
            tarjeta:['',Validators.required, Validators.minLength(16), Validators.maxLength(16)],
            titular:['',Validators.required],
            mes:['',Validators.required],
            year:['',Validators.required],
            codSeguridad:['',Validators.required, Validators.minLength(3), Validators.maxLength(3) ],
            monto:['',Validators.required]
        });
    }

    get f() {return this.formPasarela.controls;}

    pasarela: Pasarela = null;

    constructor(private _pasarela: PasarelaServicios , private _router: Router, private formBuilder: FormBuilder){
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
        this.submitted = true;

        if(this.formPasarela.invalid){
            return;
        }else{  
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
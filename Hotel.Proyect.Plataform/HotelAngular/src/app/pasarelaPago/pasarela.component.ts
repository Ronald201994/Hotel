import { Component, OnInit } from '@angular/core';
import { PasarelaServicios } from './servicio.pasarela';
import { Pasarela } from './pasarela';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector : '',
    templateUrl: './pasarela.component.html',
    styleUrls: ['./pago.css']
})

export class PasarelaComponent implements OnInit { 

    formPasarela : FormGroup;
    submitted = false;
   
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

    constructor(private _pasarela: PasarelaServicios , private formBuilder: FormBuilder){
        this.pasarela = <Pasarela>{
            NumeroTarjeta:"",
            TipoTarjeta:"",
            CodigoSeguridadTarjeta:"",
            TitularTarjeta:"",
            MesExpiracionTarjeta:"",
            AnioExpiracionTarjeta:"", 
            MontoConsumir:""
        };
    }

    ingresePasarela(): void{

        this.submitted = true;

        if(this.formPasarela.invalid){
            return;
        }else{
            this._pasarela.ingresePasarela(this.pasarela)
        .subscribe();
        }

        
    }

}
import { Component } from '@angular/core';
import { PasarelaServicios } from './servicio.pasarela';
import { Pasarela } from './pasarela';

@Component({
    selector : '',
    templateUrl: './pasarela.component.html',
    styleUrls: ['./pago.css']
})

export class PasarelaComponent { 
    pasarela : Pasarela = null;

    constructor(private _pasarela: PasarelaServicios){
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
        var pasarela = this._pasarela.ingresePasarela(this.pasarela)
        .subscribe();
    }

}
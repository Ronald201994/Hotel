import { Component, OnInit } from '@angular/core';
import {HabitacionServicio } from './servicio.habitacion';
import {Habitacion } from './habitacion';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-habitacion-Fecha',
    templateUrl: './buscarHabitacionByFecha.html',
    styleUrls: ['./habitaciones.css']
})
export class BuscarHabitacionByFechaComponent implements OnInit {
    formBuscarByPrice: FormGroup;
    submitted = false;

    ngOnInit(): void {
        this.formBuscarByPrice = this.formBuilder.group({
            precio1: ['', Validators.required],
            precio2: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formBuscarByPrice.controls; } 
    habitaciones : Habitacion[];
    fecha1 : string;
    fecha2 : string;
    
    constructor(private formBuilder: FormBuilder, private _habitacionServicio: HabitacionServicio, private _router : Router, private route: ActivatedRoute ){
        this.fecha1 = this.route.snapshot.params.fecha1;
        this.fecha2 = this.route.snapshot.params.fecha2;

        this._habitacionServicio.GetHabitacionByFecha(this.fecha1, this.fecha2)
        .subscribe(
            habitacionRespones => this.habitaciones = habitacionRespones
        );
    }

    
    
    verDetalleHabitacion(ID: number){
        this._router.navigate(['detalleHabitacion/'+ID]);
    }

    regresarListaHabitaciones() : void{
        this._router.navigate(['/listarHabitaciones']); 
    } 

    cancelar(){
        this._router.navigate(['/home']);
    }

    /*buscarHabitacionesByPrecio(){
        this._habitacionServicio.GetHabitacionByPrecio(this.precio1, this.precio2)
        .subscribe(
            habitacionRespones => this.habitaciones = habitacionRespones
        );
        this._router.navigate(['/buscarHabitacion']);
    }*/
}
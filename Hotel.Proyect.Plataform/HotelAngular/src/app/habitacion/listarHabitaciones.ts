import { Component, OnInit } from '@angular/core';
import { HabitacionServicio } from './servicio.habitacion';
import { Habitacion } from './habitacion';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'listar-habitaciones',
    templateUrl: './ListarHabitaciones.html',
    styleUrls: ['./habitaciones.css']
})
export class ListarHabitacionesComponent implements OnInit {
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
    IdHabitacion : Number;

    constructor(private formBuilder: FormBuilder, private _habitacionServicio: HabitacionServicio, private _router: Router){
        this._habitacionServicio.GetHabitaciones()
        .subscribe(
            habitacionResponse => this.habitaciones = habitacionResponse
        );
    }

    verDetalleHabitacion(ID: number){
        this._router.navigate(['detalleHabitacion/'+ID]);
    }

    irMetodoToGetListadoHabitacionByPrice(precio1 : number, precio2){
        this.submitted = true;

        if (this.formBuscarByPrice.invalid) {
            return;
        }
        else {
       this._router.navigate(['buscarHabitacion/'+precio1+'/'+precio2]);
    }
    }

    getHabitacion(ID: number){
        this._router.navigate(['reservaHabitacion/'+ID]);
    }

}
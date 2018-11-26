import { Component, OnInit } from '@angular/core';
import { HabitacionServicio } from './servicio.habitacion';
import { Habitacion } from './habitacion';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';



@Component({
    selector: 'app-habitaciones-date',
    templateUrl: './buscarHabitacionesByDate.html',
    styleUrls: ['./habitaciones.css']
})
export class BuscarHabitacionesByDateComponent implements OnInit {
    formBuscarByPrice: FormGroup;
    submitted = false;

    ngOnInit(): void {
        /*this.formBuscarByPrice = this.formBuilder.group({
            fecha1: ['', Validators.required],
            fecha2: ['', Validators.required]
        });*/
    }

    // convenience getter for easy access to form fields
    //get f() { return this.formBuscarByPrice.controls; } 
    
    habitaciones : Habitacion[];
    IdHabitacion : Number;

    

    constructor(private formBuilder: FormBuilder, private _habitacionServicio: HabitacionServicio, private _router: Router){
        /*this._habitacionServicio.GetHabitaciones()
        .subscribe(
            habitacionResponse => this.habitaciones = habitacionResponse
        );*/
    }

    verDetalleHabitacion(ID: number){
        this._router.navigate(['detalleHabitacion/'+ID]);
    }

    pipe = new DatePipe('en-ES'); // Use your own locale

    fecha1 :string;
    fecha2 :string;


    irMetodoToGetListadoHabitacionByPrice(fecha1 : string, fecha2: string){
        this.fecha1 = this.pipe.transform(fecha1, 'MM-dd-yyyy');
        this.fecha2 = this.pipe.transform(fecha2, 'MM-dd-yyyy');

        this._habitacionServicio.GetHabitacionByFecha(this.fecha1, this.fecha2)
        .subscribe(
            data => {
                this.habitaciones = data;                
            }, error => {
                console.error(error);
            }
        );
        //this._router.navigate(['buscarHabitacion/'+this.fecha1+'/'+this.fecha2]);

    }

    getHabitacion(ID: number){
        this._router.navigate(['reservaHabitacion/'+ID]);
    }

}
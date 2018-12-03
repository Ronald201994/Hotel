import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReporteServicio } from './servicioReporte';
import { ReservasHabitacion } from './reservasHabitacion';


@Component({
    selector: 'reporte-one',
    templateUrl: './reporteOne.component.html'
})
export class ReporteOneComponent {
    reservaHabitaciones: ReservasHabitacion[];

    constructor(private _reporteServicio: ReporteServicio, private _router: Router, private route: ActivatedRoute) {
        this._reporteServicio.GetRepHabitacionUsadas()
            .subscribe(
                data => {
                this.reservaHabitaciones = data;
                }
            );
    }
}
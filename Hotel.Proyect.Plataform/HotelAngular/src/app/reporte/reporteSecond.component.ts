import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReporteServicio } from './servicioReporte';
import { ReservaMes } from './ReservasMes';


@Component({
    selector: 'reporte-one',
    templateUrl: './reporteSecond.component.html'
})
export class ReporteSecondComponent {
    reservasMes: ReservaMes[];

    constructor(private _reporteServicio: ReporteServicio, private _router: Router, private route: ActivatedRoute) {
        this._reporteServicio.GetRepReservasMes()
            .subscribe(
                data => {
                this.reservasMes = data;
                }
            );
    }
}
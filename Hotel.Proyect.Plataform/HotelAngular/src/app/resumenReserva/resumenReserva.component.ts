import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import swal from "sweetalert2";

@Component({
    selector: 'resumen-reserva',
    templateUrl: './resumenReserva.component.html'
})
export class ResumenReservaComponent implements OnInit{
    nameUser: string = "";
    apePat: string = "";
    apeMat: string = "";
    numHabitacion: string = "";
    precio: String = "";
    tipo: String = "";

    ngOnInit(): void {
        this.nameUser = localStorage.getItem("nameUser");
        this.apePat = localStorage.getItem("apePat");
        this.apeMat = localStorage.getItem("apeMat");
        this.numHabitacion = localStorage.getItem("numHabitacion"); 
        this.precio = localStorage.getItem("precio");
        this.tipo= localStorage.getItem("tipo");
    }

    constructor(private _router : Router) {

    }
    messageAlert: string = "";

    public captureScreen() {
        var data = document.getElementById('contentToConvert');
        html2canvas(data).then(canvas => {
            // Few necessary setting options  
            var imgWidth = 308; //208
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;

            const contentDataURL = canvas.toDataURL('image/jpg')
            let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
            var position = 10;
            pdf.addImage(contentDataURL, 'JPG', -50, position, imgWidth, imgHeight)
            pdf.save('reporteReserva.pdf'); // Generated PDF     
        });
        swal('Gracias por tu reserva', this.messageAlert, 'success');
        this.irHome();
    }

    irHome(){
        this._router.navigate(['/home']);
    }

    @ViewChild('content') content: ElementRef;
    public reportePDF() {
        let doc = new jspdf();

        let specialElementHadLers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };

        let content = this.content.nativeElement;

        doc.fromHTML(content.innerHTML, 15, 15, {
            'width': 190,
            'elementHandlers': specialElementHadLers
        });

        doc.save('test.pdf');

    }

}
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { ReservaHabitacion } from './reservaHabitacion';
import { ReservaHabitacionServicio } from './servicio.reservaHabitacion';
import { Usuario } from '../login/usuario';
import { LoginService } from '../login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from'sweetalert2';
import * as $ from 'jquery';

@Component({
    selector: 'app-reserva-habitacion',
    templateUrl: './reservaHabitacion.component.html' ,
    styleUrls: ['./reservaHabitacion.component.css']
})
export class ReservaHabitacionComponent implements OnInit{
    model;
    formReservaHabitacion: FormGroup;
    submitted = false;
    messageAler: string;

    id : number;
    IdUsuario: number;
    fechaIngreso: string;
    fechaSalida: string;
    hidden: boolean = false;

    idFromLocalS: string;

    usuario: Usuario[];
    idUser: string;
    nameUser: string;
    apePat: string;
    apeMat: string;
    idHabitacionStorage: string;
    numHabitacion: string;

    ngOnInit(): void{
        this.formReservaHabitacion = this.formBuilder.group({
        });

        $(document).ready(function () {
            var navListItems = $('div.setup-panel div a'),
                    allWells = $('.setup-content'),
                    allNextBtn = $('.nextBtn');
          
            allWells.hide();
          
            navListItems.click(function (e) {
                e.preventDefault();
                var $target = $($(this).attr('href')),
                        $item = $(this);
          
                if (!$item.hasClass('disabled')) {
                    navListItems.removeClass('btn-primary').addClass('btn-default');
                    $item.addClass('btn-primary');
                    allWells.hide();
                    $target.show();
                    $target.find('input:eq(0)').focus();
                }
            });
          
            allNextBtn.click(function(){
                var curStep = $(this).closest(".setup-content"),
                    curStepBtn = curStep.attr("id"),
                    nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                    curInputs = curStep.find("input[type='text'],input[type='url']"),
                    isValid = true;
          
                $(".form-group").removeClass("has-error");
                for(var i=0; i<curInputs.length; i++){
                    if (!curInputs[i].validity.valid){
                        isValid = false;
                        $(curInputs[i]).closest(".form-group").addClass("has-error");
                    }
                }
          
                if (isValid)
                    nextStepWizard.removeAttr('disabled').trigger('click');
            });
          
            $('div.setup-panel div a.btn-primary').trigger('click');
          });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formReservaHabitacion.controls; }

    /*console.log(users);
    console.log(name);*/

    startDate = new Date(1990, 0, 1);

    reservaHabitacion: ReservaHabitacion = null;

    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private _reservaHabitacionServicio: ReservaHabitacionServicio, 
                private _router: Router, private _loginService: LoginService){
        this.id = this.route.snapshot.params.id;

        
        this.usuario = JSON.parse(localStorage.getItem("dataUser"));

        this.idUser = localStorage.getItem("idUser");
        this.nameUser = localStorage.getItem("nameUser");
        this.apePat = localStorage.getItem("apePat");
        this.apeMat = localStorage.getItem("apeMat");
        this.idHabitacionStorage = localStorage.getItem("idHabitacion");
        this.numHabitacion = localStorage.getItem("numHabitacion");

        //this.usuario = _loginService.getUserLoggedIn(); //Usar para localStorage con más lelvel
        _loginService.getUserLoggedIn();
        
        this.reservaHabitacion = <ReservaHabitacion>{
            IdHabitacion: this.idHabitacionStorage,
            IdUsuario: this.idUser,
            NombreUsurario: this.nameUser,
            ApePatUsurario: this.apePat,
            ApeMatUsurario: this.apeMat,
            NumerHabitacion: this.numHabitacion,
            FechaIngreso: "",
            FechaSalida: ""               
        };
    }

    registrarReservaHabitacion(): void{
        this.submitted = true;

        if (this.formReservaHabitacion.invalid) {
            return;
        }
        else {
        this._reservaHabitacionServicio.registrarReservaHabitacion(this.reservaHabitacion)
        .subscribe();
        swal("Reserva exitosa!", this.messageAler, 'success');
        /*localStorage.removeItem("idUser");
        localStorage.removeItem("nameUser");
        localStorage.removeItem("apePat");
        localStorage.removeItem("apeMat");
        localStorage.removeItem("idHabitacion");
        localStorage.removeItem("numHabitacion");*/

     
    }
    this.refresh();
    }

    refresh(){
        this.reservaHabitacion = <ReservaHabitacion>{
            IdHabitacion: "",
            IdUsuario: "",
            NombreUsurario: "",
            ApePatUsurario: "",
            ApeMatUsurario: "",
            NumerHabitacion: "",
            FechaIngreso: "",
            FechaSalida: ""               
        };
    }

    irToListarHabitaciones(){
        this._router.navigate(['/listarHabitaciones']);
    }

    irToPagar(){
        this._router.navigate(['/pago']);
    }
}
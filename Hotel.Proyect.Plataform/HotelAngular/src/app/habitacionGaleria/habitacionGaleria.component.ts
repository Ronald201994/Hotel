import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'app-galeria-habitacion',
    templateUrl: './habitacionGaleria.component.html',
    styleUrls: ['./habitacionGaleria.component.css']
})

export class HabitacionGaleriaComponent implements OnInit {
    ngOnInit(): void {
        $(function () {
            var selectedClass = "";
            $(".filter").click(function () {
                selectedClass = $(this).attr("data-rel");
                $("#gallery").fadeTo(100, 0.1);
                $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
                setTimeout(function () {
                    $("." + selectedClass).fadeIn().addClass('animation');
                    $("#gallery").fadeTo(300, 1);
                }, 300);
            });
        });

        /*$(function () { 
            $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
            });*/
    }
    git(){
    $(function () { 
        $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
        });
    }

} 
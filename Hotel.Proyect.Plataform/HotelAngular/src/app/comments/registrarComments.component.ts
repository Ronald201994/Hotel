import { Component, OnInit } from '@angular/core';
import { Comments } from './comments';
import { Comentarios } from './comentarios';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentsServicio } from './servicio.comments';
import swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
    selector: 'app-registrar-comments',
    templateUrl: './RegistrarComments.component.html',
    styleUrls: ['./registrarComments.component.css']

})

export class RegistrarCommentsComponent{
    formComment: FormGroup;
    submitted = false;
    
    ngOnInit(): void {
        this.formComment = this.formBuilder.group({
            des: ['', Validators.required],
        });
    }

    comentarios: Comentarios[];

 
    comments: Comments = null;
    idUser: string;
    nameUser: string;



    constructor(private formBuilder: FormBuilder, private _servicioComments: CommentsServicio, private _router: Router) {
        this.idUser = localStorage.getItem("idUser");
        this.nameUser = localStorage.getItem("nameUser");
       
        this._servicioComments.GetComments()
            .subscribe(
                data => {
                    this.comentarios = data;
                    console.log(this.comentarios);
                }, error => {
                    console.error(error);
                });

        this.comments = <Comments>{
            Descripcion: "",
            Usuario: this.idUser,
            Nombre: this.nameUser
        };
    }

    messageAlert: string ="";
    //coment = this.comments.Descripcion;

    registrarComments(): void {

        this.submitted = true;

        if (this.formComment.invalid) {
            return;
        }
        else {
        this._servicioComments.registroComments(this.comments)
            .subscribe(
                data => {
                    this.comments = data;
                    console.log(this.comments);

                    swal('Comentario agregado', this.messageAlert, 'success');

                    this.refreshComments();


                }, error => {
                    console.error(error);
                });

            }

        
    }

    regresarListaComments(): void {
        this._router.navigate(['/listarComments']);
    }

    refreshComments() {
        this._servicioComments.GetComments()
            .subscribe(
                data => {
                    this.comentarios = data;
                    console.log(this.comentarios);
                }, error => {
                    console.error(error);
                });

                this._router.navigate(['/comentarios']);

    }



}
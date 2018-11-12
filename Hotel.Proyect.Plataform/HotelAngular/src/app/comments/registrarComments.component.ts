import { Component } from '@angular/core';
import { Comments } from './comments';
import { Comentarios } from './comentarios';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentsServicio } from './servicio.comments';


@Component({
    selector: 'app-registrar-comments',
    templateUrl: './RegistrarComments.component.html',
    styleUrls: ['./registrarComments.component.css']

})

export class RegistrarCommentsComponent {
    comentarios: Comentarios[];

    comments: Comments = null;

    constructor(private _servicioComments: CommentsServicio,  private _router : Router){
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
            Usuario: "", 
        }; 
    }
    

    registrarComments(): void{
        var registrarComments= this._servicioComments.registroComments(this.comments)
        .subscribe();
    }

    regresarListaComments() : void{
        this._router.navigate(['/listarComments']);
    } 

    
    
}
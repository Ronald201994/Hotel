import { Component } from '@angular/core';
import { Comments } from './comments';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentsServicio } from './servicio.comments';


@Component({
    selector: 'app-registrar-comments',
    templateUrl: './registrarComments.component.html',
    styleUrls: ['./registrarComments.component.css']

})

export class RegistrarCommentsComponent {

    comments: Comments = null;

    constructor(private _registrarComments: CommentsServicio,  private _router : Router){
        
        this.comments = <Comments>{
            Descripcion: "",
            Usuario: "",
        };
    }

    registrarComments(): void{
        var registrarComments= this._registrarComments.registroComments(this.comments)
        .subscribe();
    }

    regresarListaComments() : void{
        this._router.navigate(['/listarComments']);
    } 

    
    
}
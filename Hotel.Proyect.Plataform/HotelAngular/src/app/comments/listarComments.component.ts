import { Component } from '@angular/core';
import { CommentsServicio } from './servicio.comments';
import { Comments } from './comments';
import { Router } from '@angular/router';

@Component ({
    selector: 'listar-comments',
    templateUrl: './listarComments.html'
})
export class ListarForoComponent {
    comments : Comments[];

    constructor(private _commentsServicios: CommentsServicio, private _router: Router){
        this._commentsServicios.GetComments()
        .subscribe(
            commentsResponse => this.comments = commentsResponse
        );
    }

    getComments(ID: string){
        this._router.navigate(['registrarComments/'+ID]);
    }

}
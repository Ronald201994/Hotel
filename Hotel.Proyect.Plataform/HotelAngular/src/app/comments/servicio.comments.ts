import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Comments } from './comments';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { error } from 'util';
import { Comentarios } from './comentarios';

@Injectable()

export class CommentsServicio {
    private _getListarCommentsURL: string ='http://localhost:55349/api/comments/ListarComments';
    private _registrarCommentsURL:  string = 'http://localhost:55349/api/comments/AgregarComments';

constructor(private _http: Http){
}

comentarios: Comentarios[];

comments : Comments[];


    GetComments() : Observable<Comentarios[]>{
        return this._http.get(this._getListarCommentsURL)
        .pipe(map((response: Response) => <Comentarios[]> response.json()),
        catchError(error => {
            return throwError("Server error")
        })
        )
    }

    registroComments(comments: Comments): Observable<Comments> {
        var body = {
            descripcion : comments.Descripcion,
            usuario : comments.Usuario
        };
        var request = this._http.post(this._registrarCommentsURL, body);

        return request.pipe(map((response: Response) => <Comments> response.json()),
        catchError(error => {
            return throwError("Server Error");
        })
    )
    }

    private controlarExecption(error : Response){
        console.log("error", error);
        return Observable.throw(error.json().error || "Server error");
    }
}
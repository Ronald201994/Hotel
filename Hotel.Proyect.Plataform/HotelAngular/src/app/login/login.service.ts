import { Usuario } from "./usuario";
import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable,  Subject, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class LoginService {
    private isUserLoggedIn;
    public userLog;
    public usserLogged: string;
    public usuario : Usuario[];
    private subject = new Subject<any>();
    private subjectPermisos = new Subject<any>();

    private _gertLoginUsuarioURL : string = 'http://localhost:55349/api/usuario/Login?'
    idUs: string;

    constructor(private _http: Http) {
        this.isUserLoggedIn = false;
    }

    //usuario: Usuario = null;

    
    ingreseUsuario(correo : string, contrasena : string) : Observable<Usuario[]> { 
        return this._http.get(this._gertLoginUsuarioURL+'correo='+correo+'&contrasena='+contrasena)
        .pipe(map((response: Response) => <Usuario[]> response.json()), 
            catchError(error => {
                return throwError("Server error"); 
            })   
        )       
    }

    setUserLoggedIn(nombre: string) {
        this.isUserLoggedIn = true;
        this.usserLogged = nombre;
        localStorage.setItem('currentUser', JSON.stringify(nombre));
        this.subject.next({ text: nombre });      
    }

    getUserLoggedIn(): string{
        let currentUser = <string>JSON.parse(localStorage.getItem('currentUser'));
        return currentUser;
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    getPermiso(): Observable<any> {
        return this.subjectPermisos.asObservable();
    }

    esAdmin: boolean = false;

    /*validarAdministrador(id: string): boolean{
        if(id == "2"){
            return this.esAdmin = true
        }
        else
            return this.esAdmin
    }*/

    validarAdministrador(id: string){
        if(id == "2"){
            localStorage.setItem('isAdmin', 'true');
            this.subjectPermisos.next({ text: 'true' });      
        }
        else{
            localStorage.setItem('isAdmin', 'false');
            this.subjectPermisos.next({ text: 'false' });              
        }
        
    }

    
    /*usuario : Usuario = null;
    login(usuario : Usuario) : Usuario{
        
        //proposito de test
        this.usuario = null;

        //si es usuario administrador
        if(usuario.userName == "liz@outlook.com" && usuario.password == "2018*qw"){
            this.usuario = usuario;
            this.usuario.esAdmin = true;
        }

        //si es un empleado cualquiera
        if(usuario.userName == "eren@gmail.com" && usuario.password == "eren123"){
            this.usuario = usuario;
            this.usuario.esAdmin=false;
        }

        return this.usuario;
        
    }*/

   /* getUsuario() : Usuario {
        return this.usuario;
    }*/


    logout() : void{
        this.usuario = null;
    }
}
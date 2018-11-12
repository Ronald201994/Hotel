
    import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioServicios } from './servicio.usuario';
//import * as $ from 'jquery'
//declare var $: any; // Para jQuery
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-registrar-usuario',
    templateUrl: './registrarUsuario.component.html',
    styleUrls: ['./registrarUsuario.component.css']

})

export class RegistrarUsuarioComponent implements OnInit {
    formRegistrarUsuario: FormGroup;
    submitted = false;

    ngOnInit(): void {
        this.formRegistrarUsuario = this.formBuilder.group({
            name: ['', Validators.required],
            apePat: ['', Validators.required],
            apeMat: ['', Validators.required],
            dni: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],

        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formRegistrarUsuario.controls; }

    usuario: Usuario = null;

    constructor(private _registrarUsuario: UsuarioServicios, private formBuilder: FormBuilder) {

        this.usuario = <Usuario>{
            DNI: "",
            Nombre: "",
            ApellidoPaterno: "",
            ApellidoMaterno: "",
            Correo: "",
            Password: ""
        };
    }

    ingreseUsuario(): void {
        this.submitted = true;

        if (this.formRegistrarUsuario.invalid) {
            return;
        }
        else {
         this._registrarUsuario.ingreseUsuario(this.usuario)
            .subscribe();
        }
    }

}

  /*$(document).ready(function() {
            $('#contact_form').bootstrapValidator({
                // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    first_name: {
                        validators: {
                                stringLength: {
                                min: 2,
                            },
                                notEmpty: {
                                message: 'Please supply your first name'
                            }
                        }
                    },
                     last_name: {
                        validators: {
                             stringLength: {
                                min: 2,
                            },
                            notEmpty: {
                                message: 'Please supply your last name'
                            }
                        }
                    },
                    email: {
                        validators: {
                            notEmpty: {
                                message: 'Please supply your email address'
                            },
                            emailAddress: {
                                message: 'Please supply a valid email address'
                            }
                        }
                    },
                    phone: {
                        validators: {
                            notEmpty: {
                                message: 'Please supply your phone number'
                            },
                            phone: {
                                country: 'US',
                                message: 'Please supply a vaild phone number with area code'
                            }
                        }
                    },
                    address: {
                        validators: {
                             stringLength: {
                                min: 8,
                            },
                            notEmpty: {
                                message: 'Please supply your street address'
                            }
                        }
                    },
                    city: {
                        validators: {
                             stringLength: {
                                min: 4,
                            },
                            notEmpty: {
                                message: 'Please supply your city'
                            }
                        }
                    },
                    state: {
                        validators: {
                            notEmpty: {
                                message: 'Please select your state'
                            }
                        }
                    },
                    zip: {
                        validators: {
                            notEmpty: {
                                message: 'Please supply your zip code'
                            },
                            zipCode: {
                                country: 'US',
                                message: 'Please supply a vaild zip code'
                            }
                        }
                    },
                    comment: {
                        validators: {
                              stringLength: {
                                min: 10,
                                max: 200,
                                message:'Please enter at least 10 characters and no more than 200'
                            },
                            notEmpty: {
                                message: 'Please supply a description of your project'
                            }
                            }
                        }
                    }
                })
                .on('success.form.bv', function(e) {
                    $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                        $('#contact_form').data('bootstrapValidator').resetForm();
        
                    // Prevent form submission
                    e.preventDefault();
        
                    // Get the form instance
                    var $form = $(e.target);
        
                    // Get the BootstrapValidator instance
                    var bv = $form.data('bootstrapValidator');
        
                    // Use Ajax to submit form data
                    $.post($form.attr('action'), $form.serialize(), function(result) {
                        console.log(result);
                    }, 'json');
                });
        });*/



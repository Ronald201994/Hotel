using Hotel.Datos;
using Hotel.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.Negocios
{
    public class UsuarioNegocios
    {
        UsuarioDatos datosUsuario = new UsuarioDatos();

        public string LoginUsuario(string correo, string contraseña)
        {
            string mensaje = "";
            int cuenta = datosUsuario.ValidarLoginUsuario(correo, contraseña);
            if (cuenta==0)
            {
                mensaje = "Login y/o contraseña incorrectos";
            }
            else
            {
                mensaje = "Ingreso exitoso";
            }
            return mensaje;
        }

        public string AgregarUsuario(Usuario usuario)
        {
            string mensaje = "";
            try
            {
                datosUsuario.AgregarUsuario(usuario);
                mensaje = "Usuario registrado exitosamente !!";
            }
            catch (Exception ex)
            {
                mensaje = "No se creo el usuario :" + ex.Message;
            }
            return mensaje;
        }

    }

}



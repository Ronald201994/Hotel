using Hotel.Negocios;
using Hotel.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hotel.WebApi.Controllers
{
    public class UsuarioController : ApiController
    {
        UsuarioNegocios negociosUsuario = new UsuarioNegocios();
        [HttpPost]
        public string LoginCliente(string login, string contraseña)
        {
            string mensaje = "";
            mensaje = negociosUsuario.LoginUsuario(login, contraseña);
            return mensaje;
        }

        [HttpPost]
        public string AgregarUsuario(Usuario usuario)
        {
            string mensaje = "";
            mensaje = negociosUsuario.AgregarUsuario(usuario);
            return mensaje;
        }
        
    }
}

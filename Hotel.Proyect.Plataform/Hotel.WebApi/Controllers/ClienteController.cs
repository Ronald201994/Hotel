using Hotel.Negocios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hotel.WebApi.Controllers
{
    public class ClienteController : ApiController
    {
        ClienteNegocios negociosCliente = new ClienteNegocios();
        [HttpPost]
        public string LoginCliente(string login, string contraseña)
        {
            string mensaje = "";
            mensaje = negociosCliente.LoginCliente(login, contraseña);
            return mensaje;
        }
    }
}

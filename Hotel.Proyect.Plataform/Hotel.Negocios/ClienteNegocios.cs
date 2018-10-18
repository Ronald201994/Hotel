using Hotel.Datos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.Negocios
{
    public class ClienteNegocios
    {
        ClienteDatos datosCliente = new ClienteDatos();

        public string LoginCliente(string login, string contraseña)
        {
            string mensaje = "";
            int cuenta = datosCliente.ValidarLoginCliente(login, contraseña);
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
    }

}

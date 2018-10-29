using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.Modelos
{
     public class Usuario
    {
        public int ID { get; set; }
        public string DNI { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPat { get; set; }
        public string ApellidoMat { get; set; }
        public string Correo { get; set; }
        public string Contraseña { get; set; }
        public int TipoUsuario { get; set; }
        public int Habitacion { get; set; }
    }
}

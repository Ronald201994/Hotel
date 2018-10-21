using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.Modelos
{
    public class Habitacion
    {
        public int ID { get; set; }

        public string Nombre { get; set; }

        public string Descripcion { get; set; }

        public int IdEstado { get; set; }

        public string Estado { get; set; }

        public int IdTipo { get; set; }

        public string Tipo { get; set; }

        public int Cantidad { get; set; }

        public double Precio { get; set; }



    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.Modelos
{
    public class ReservaHabitacion
    {
        public int ID { get; set; }

        public DateTime FechaIngreso { get; set; }

        public DateTime FechaSalida { get; set; }

        public int IdHabitacion { get; set; }

        public int IdDetalle { get; set; }

    }
}

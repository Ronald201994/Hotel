using Hotel.Datos;
using Hotel.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.Negocios
{
    public class ReporteNegocios
    {
        ReporteDatos rd = new ReporteDatos();
        public List<ReporteHabitacionMasUsada> RepHabitacionMasUsada()
        {
            return rd.RepHabitacionMasUsada();
        }

        public List<ReservasMes> RepReservasMes()
        {
            return rd.RepReservasMes();
        }
    }
}

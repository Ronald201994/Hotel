using Hotel.Modelos;
using Hotel.Negocios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hotel.WebApi.Controllers
{
    public class ReporteController : ApiController
    {
        ReporteNegocios rn = new ReporteNegocios();

        [HttpGet]
        public List<ReporteHabitacionMasUsada> RepHabitacionMasUsada()
        {
            var lista = rn.RepHabitacionMasUsada();
            return lista;
        }

        [HttpGet]
        public List<ReservasMes> RepReservasMes()
        {
            var lista = rn.RepReservasMes();
            return lista;
        }
    }
}

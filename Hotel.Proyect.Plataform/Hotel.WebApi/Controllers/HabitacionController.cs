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
    public class HabitacionController : ApiController
    {
        HabitacionNegocios negociosHabitacion = new HabitacionNegocios();

        [HttpGet]
        public List<Habitacion> ListarHabitaciones()
        {
            var lista = negociosHabitacion.ListarHabitaciones();
            return lista;
        }

        [HttpGet]
        public List<Habitacion> GetHabitacionById(int id)
        {
            var lista = negociosHabitacion.BuscarHabitacionByID(id);
            return lista;
        }

        [HttpGet]
        public List<Habitacion> GetHabitacionByPrecio(double precio1, double precio2)
        {
            var lista = negociosHabitacion.BuscarHabitacionByPrecio(precio1, precio2);
            return lista;
        }

    }
}

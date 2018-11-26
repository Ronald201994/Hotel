using Hotel.Datos;
using Hotel.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.Negocios
{
   public class HabitacionNegocios
    {
        HabitacionDatos datosHabitacion = new HabitacionDatos();

        public List<Habitacion> ListarHabitaciones()
        {
            return datosHabitacion.ListarHabitaciones();
        }

        public List<Habitacion> BuscarHabitacionByID(int id)
        {
            return datosHabitacion.BuscarHabitacionByID(id); //por id
        }

        public List<Habitacion> BuscarHabitacionByFecha(DateTime fecha1, DateTime fecha2)
        {
            return datosHabitacion.BuscarHabitacionByFecha(fecha1, fecha2); // por precios
        }

        public string ReservarHabitacion(ReservaHabitacion reservaHabitacion)
        {
            string mensaje = "";
            try
            {
                datosHabitacion.ReservarHabitacion(reservaHabitacion);
                mensaje = "La Reserva de Habitacion se realizo con exito  !!";
            }
            catch (Exception ex)
            {
                mensaje = "No se realizo la reserva de habitacion :" + ex.Message;
            }
            return mensaje;
        }
    }
}

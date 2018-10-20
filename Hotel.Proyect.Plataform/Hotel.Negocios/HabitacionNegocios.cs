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

        public List<Habitacion> BuscarHabitacionByID(int id)
        {
            return datosHabitacion.BuscarHabitacionByID(id); //por id
        }

        public List<Habitacion> BuscarHabitacionByPrecio(double precio1, double precio2)
        {
            return datosHabitacion.BuscarHabitacionByPrecio(precio1, precio2); // por precios
        }
    }
}

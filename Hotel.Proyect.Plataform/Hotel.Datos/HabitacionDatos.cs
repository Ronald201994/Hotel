﻿using Hotel.Modelos;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.Datos
{
   public class HabitacionDatos
    {
        SqlConnection conexion;
        //SqlDataAdapter comando;
        SqlDataReader dr;
        SqlCommand cmd;
        String errores;
        Conexion cn = new Conexion();

        public List<Habitacion> BuscarHabitacionByID(int id)
        {
            List<Habitacion> lista = new List<Habitacion>();
            try
            {
                conexion = cn.Conectar();
                cmd = new SqlCommand("SP_BuscarHabitacionByID", conexion);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ID", id);

                dr = null;
                conexion.Open();
                dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    Habitacion habitacion = new Habitacion();
                    habitacion.Nombre = Convert.ToString(dr["Nombre"]);
                    habitacion.Descripcion = Convert.ToString(dr["Descripcion"]);
                    habitacion.Estado = Convert.ToString(dr["Estado"]);
                    habitacion.Tipo = Convert.ToString(dr["Tipo"]);
                    habitacion.Cantidad = Convert.ToInt32(dr["Cantidad"]);
                    habitacion.Precio = Convert.ToDouble(dr["Precio"]);
                    lista.Add(habitacion);
                }
                dr.Close();
            }
            catch (Exception ex)
            {
                errores = ex.Message;
            }
            finally
            {
                if (conexion.State == ConnectionState.Open)
                {
                    conexion.Close();
                }
                conexion.Dispose();
                cmd.Dispose();
            }
            return lista;
        }


        public List<Habitacion> BuscarHabitacionByPrecio(double precio1, double precio2)
        {
            List<Habitacion> lista = new List<Habitacion>();
            try
            {
                conexion = cn.Conectar();
                cmd = new SqlCommand("SP_BuscarHabitacionByPrecio", conexion);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Precio1", precio1);
                cmd.Parameters.AddWithValue("@Precio2", precio2);

                dr = null;
                conexion.Open();
                dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    Habitacion habitacion = new Habitacion();
                    habitacion.Nombre = Convert.ToString(dr["Nombre"]);
                    habitacion.Descripcion = Convert.ToString(dr["Descripcion"]);
                    habitacion.Estado = Convert.ToString(dr["Estado"]);
                    habitacion.Tipo = Convert.ToString(dr["Tipo"]);
                    habitacion.Cantidad = Convert.ToInt32(dr["Cantidad"]);
                    habitacion.Precio = Convert.ToDouble(dr["Precio"]);
                    lista.Add(habitacion);
                }
                dr.Close();
            }
            catch (Exception ex)
            {
                errores = ex.Message;
            }
            finally
            {
                if (conexion.State == ConnectionState.Open)
                {
                    conexion.Close();
                }
                conexion.Dispose();
                cmd.Dispose();
            }
            return lista;
        }


    }
}

using Hotel.Modelos;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.Datos
{
    public class ReporteDatos
    {
        SqlConnection conexion;

        SqlDataReader dr;
        SqlCommand cmd;
        String errores;
        Conexion cn = new Conexion();

        public List<ReporteHabitacionMasUsada> RepHabitacionMasUsada()
        {
            List<ReporteHabitacionMasUsada> lista = new List<ReporteHabitacionMasUsada>();

            try
            {
                conexion = cn.Conectar();

                conexion = cn.Conectar();
                cmd = new SqlCommand("SP_ReporteHabitacionesMasUsadas", conexion);
                cmd.CommandType = CommandType.StoredProcedure;

                dr = null;
                conexion.Open();
                dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    ReporteHabitacionMasUsada reporte = new ReporteHabitacionMasUsada();
                    reporte.Cantidad = Convert.ToInt32(dr["Cantidad"]);
                    reporte.Tipo = Convert.ToString(dr["Tipo"]);
                    lista.Add(reporte);
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

        public List<ReservasMes> RepReservasMes()
        {
            List<ReservasMes> lista = new List<ReservasMes>();

            try
            {
                conexion = cn.Conectar();

                conexion = cn.Conectar();
                cmd = new SqlCommand("SP_ReporteReservasMes", conexion);
                cmd.CommandType = CommandType.StoredProcedure;

                dr = null;
                conexion.Open();
                dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    ReservasMes reporte = new ReservasMes();
                    reporte.Cantidad = Convert.ToInt32(dr["Cantidad"]);
                    reporte.Mes = Convert.ToString(dr["Mes"]);
                    lista.Add(reporte);
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

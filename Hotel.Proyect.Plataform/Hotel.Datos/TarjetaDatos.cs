using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Hotel.Modelos;

namespace Hotel.Datos
{
    public class TarjetaDatos
    {
        SqlConnection conexion;
        //SqlDataAdapter comando;
       // SqlDataReader dr;
        //SqlCommand cmd;
       // String errores;
        Conexion cn = new Conexion();

        public TarjetaDatos()
        {
            conexion = cn.Conectar();
        }

        public TarjetaInfo ObtenerInformacionTarjeta(int tipoTarjeta,
                                string numeroTarjeta,
                                string titularTarjeta,
                                string mesExpiracion,
                                string añoExpiracion,
                                string codigoSeguridad)
        {
            TarjetaInfo tarjetaInfo = null;
            string query = "sp_GetTarjetaByInfo";
            SqlCommand cmd = new SqlCommand(query, conexion);
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@idTipoTarjeta", tipoTarjeta);
            cmd.Parameters.AddWithValue("@numeroTarjeta", numeroTarjeta);
            cmd.Parameters.AddWithValue("@nombreTarjeta", titularTarjeta);
            cmd.Parameters.AddWithValue("@securityCodeTarjeta", codigoSeguridad);
            cmd.Parameters.AddWithValue("@mesExpiracionTarjeta", mesExpiracion);
            cmd.Parameters.AddWithValue("@añoExpiracionTarjeta", añoExpiracion);

            conexion.Open();
            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.HasRows)
            {
                tarjetaInfo = new TarjetaInfo();

                while (reader.Read())
                {
                    tarjetaInfo.titularTarjeta = reader["nombreTarjeta"].ToString();
                    tarjetaInfo.numeroTarjeta = reader["numeroTarjeta"].ToString();
                    tarjetaInfo.tarjetaHabilitada = bool.Parse(reader["tarjetaHabilitada"].ToString());
                    tarjetaInfo.creditoDisponible = double.Parse(reader["creditoDisponible"].ToString());
                }

            }

            conexion.Close();

            return tarjetaInfo;
        }
    }
}

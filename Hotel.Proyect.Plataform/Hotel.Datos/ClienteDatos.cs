using Hotel.Modelos;
using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//Referencias
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;

namespace Hotel.Datos
{

    public class ClienteDatos
    {
        SqlConnection conexion;
        //SqlDataAdapter comando;
        SqlDataReader dr;
        SqlCommand cmd;
        String errores;
        int int_numero_registros;
        Conexion cn = new Conexion();

        
        public int ValidarLoginCliente(string login, string contraseña)
        {
            conexion = cn.Conectar();

            cmd = new SqlCommand("SP_LoginCliente", conexion);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Login", login);
            cmd.Parameters.AddWithValue("@Contraseña", contraseña);

            int cuenta = Convert.ToInt32(cmd.ExecuteScalar());
        
            return cuenta;
        }
    }

}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//Referencias
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Hotel.Datos
{
    public class Conexion
    {
        SqlConnection conexion;
        public SqlConnection Conectar()
        {
            conexion = new SqlConnection(ConfigurationManager.ConnectionStrings["Conexion"].ConnectionString);
            return conexion;
        }
    }
}

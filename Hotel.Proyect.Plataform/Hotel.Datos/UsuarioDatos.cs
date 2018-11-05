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

    public class UsuarioDatos
    {
        SqlConnection conexion;
        //SqlDataAdapter comando;
        SqlDataReader dr;
        SqlCommand cmd;
        Conexion cn = new Conexion();

        public int ValidarLoginUsuario(string correo, string contraseña)
        {
            conexion = cn.Conectar();

            cmd = new SqlCommand("SP_LoginUsuario", conexion);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@correo", correo);
            cmd.Parameters.AddWithValue("@Contraseña", contraseña);

            int cuenta = Convert.ToInt32(cmd.ExecuteScalar());
        
            return cuenta;
        }

        public void AgregarUsuario(Usuario usuario)
        {
            //conexion
            conexion = cn.Conectar();
            conexion.Open();

            string sqlStatement = "SP_RegistrarUsuario";
            SqlCommand cmd = new SqlCommand(sqlStatement, conexion);

            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@dni", usuario.DNI);
            cmd.Parameters.AddWithValue("@nombre", usuario.Nombre);
            cmd.Parameters.AddWithValue("@apellidoPaterno", usuario.ApellidoPat);
            cmd.Parameters.AddWithValue("@apellidoMaterno", usuario.ApellidoMat);
            cmd.Parameters.AddWithValue("@correo", usuario.Correo);
            cmd.Parameters.AddWithValue("@contraseña", usuario.Contraseña);
            cmd.Parameters.AddWithValue("@idTipoUsuario", usuario.TipoUsuario);
            cmd.ExecuteNonQuery();

            conexion.Close();

        }



    }
}



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

        /*
        public int ValidarLoginUsuario(string correo, string contraseña)
        {
            conexion = cn.Conectar();   

            cmd = new SqlCommand("SP_LoginUsuario", conexion);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@correo", correo);
            cmd.Parameters.AddWithValue("@contraseña", contraseña);

            int cuenta = Convert.ToInt32(cmd.ExecuteScalar());
        
            return cuenta;
        }
        */

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

        public Usuario Login(string correo, string contraseña)
        {
            Usuario usuario = null;

            conexion = cn.Conectar();
            conexion.Open();

            string query = "select * from tbUsuario";
            query += "Where correo=@correo";
            query += "And contraseña=@contraseña";
            cmd = new SqlCommand(query, conexion);
            cmd.Parameters.AddWithValue("@correo", correo);
            cmd.Parameters.AddWithValue("@contraseña", contraseña);


            SqlDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                usuario = new Usuario();
                while (dr.Read())
                {
                    usuario.ID = int.Parse(dr["idUsuario"].ToString());
                    usuario.DNI = dr["dni"].ToString();
                    usuario.Nombre = dr["nombre"].ToString();
                    usuario.ApellidoPat = dr["apellidoPat"].ToString();
                    usuario.ApellidoMat = dr["apellidoMat"].ToString();
                    usuario.Correo = dr["correo"].ToString();
                    usuario.Contraseña = dr["contraseña"].ToString();
                    usuario.TipoUsuario = int.Parse(dr["idtipoUsuario"].ToString());
                    usuario.Habitacion = int.Parse(dr["idHabitacion"].ToString());
                }
            }
            conexion.Close();

            return usuario;
        }
 

    }
}



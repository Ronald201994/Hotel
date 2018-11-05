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
        String errores;
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
            cmd.Parameters.AddWithValue("@idHabitacion", usuario.Habitacion);
            cmd.ExecuteNonQuery();

            conexion.Close();

        }
        /*
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
        */


    
         public List<Habitacion> loginUsuario(string correo, string contraseña)
         {
            List<Habitacion> lista = new List<Habitacion>();
            try
             {
                 conexion = cn.Conectar();
                 cmd = new SqlCommand("SP_LoginUsuario", conexion);
                 cmd.CommandType = CommandType.StoredProcedure;
                 cmd.Parameters.AddWithValue("@correo", correo);
                 cmd.Parameters.AddWithValue("@contraseña", contraseña);

                 dr = null;
                 conexion.Open();
                 dr = cmd.ExecuteReader();
                 while (dr.Read())
                 {
                    Usuario usu = new Usuario();
                    usu.ID = int.Parse(dr["ID"].ToString());
                    usu.DNI = Convert.ToString(dr["DNI"]);
                    usu.Nombre = Convert.ToString(dr["Nombre"]);
                    usu.ApellidoPat = Convert.ToString(dr["ApellidoPat"]);
                    usu.ApellidoMat = Convert.ToString(dr["ApellidoMat"]);
                    usu.Correo = Convert.ToString(dr["Correo"]);
                    usu.Contraseña = Convert.ToString(dr["Contraseña"]);
                    usu.TipoUsuario = int.Parse(dr["TipoUsuario"].ToString());
                    usu.Habitacion = int.Parse(dr["Habitacion"].ToString());
                    lista.Add(usu);
             
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



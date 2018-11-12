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
    public class CommentsDatos
    {
        SqlConnection conexion;
        //SqlDataAdapter comando;
        SqlDataReader dr;
        SqlCommand cmd;
        String errores;
        Conexion cn = new Conexion();

        public List<Comments> ListarComments()
        {
            List<Comments> lista = new List<Comments>();

            try
            {
                conexion = cn.Conectar();
                cmd = new SqlCommand("SP_ListarComments", conexion);
                cmd.CommandType = CommandType.StoredProcedure;

                dr = null;
                conexion.Open();
                dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    Comments comments = new Comments();
                    comments.descripcion = Convert.ToString(dr["Descripcion"]);
                    comments.usuario = Convert.ToInt32(dr["Usuario"]);
                    lista.Add(comments);
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


        public void AgregarCommends(Comments comments)
        {
            //conexion
            conexion = cn.Conectar();
            conexion.Open();

            string sqlStatement = "SP_RegistrarComments";
            SqlCommand cmd = new SqlCommand(sqlStatement, conexion);

            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@descripcion", comments.descripcion);
            cmd.Parameters.AddWithValue("@idUsuario", comments.usuario);
            cmd.ExecuteNonQuery();

            conexion.Close();

        }

    }
}

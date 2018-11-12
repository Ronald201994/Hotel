using Hotel.Datos;
using Hotel.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.Negocios
{
    public class CommentsNegocios
    {
            CommentsDatos datosComments = new CommentsDatos();

            public List<Comments> ListarComments()
            {
                return datosComments.ListarComments();
            }

            public string AgregarComments(Comments comments)
            {
                string mensaje = "";
                try
                {
                    datosComments.AgregarCommends(comments);
                    mensaje = "Se agrego su Comentario";
                }
                catch (Exception ex)
                {
                    mensaje = "No se pudo agregar su comentario:" + ex.Message;
                }
                return mensaje;
            }
        }
    }

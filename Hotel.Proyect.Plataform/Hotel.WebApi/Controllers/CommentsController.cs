using Hotel.Modelos;
using Hotel.Negocios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hotel.WebApi.Controllers
{
    public class CommentsController : ApiController
    {
            CommentsNegocios negociosComments = new CommentsNegocios();

            [HttpGet]
            public List<Comments> ListarComments()
            {
            var lista = negociosComments.ListarComments();
                return lista;
            }

            [HttpPost]
            public string AgregarComments(Comments comments)
            {
                string mensaje = "";
                mensaje = negociosComments.AgregarComments(comments);
                return mensaje;
            }
        }
    }

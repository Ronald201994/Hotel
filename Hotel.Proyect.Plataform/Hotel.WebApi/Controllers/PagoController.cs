using Hotel.Negocios;
using Hotel.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hotel.WebApi.Controllers
{
    public class PagoController : ApiController
    {
        ValidarPagoNegocios negocios = new ValidarPagoNegocios();
        [HttpPost]
        public ValidarPagoResponse ValidarPago(ValidarPagoRequest request)
        {
            ValidarPagoResponse response = new ValidarPagoResponse();
            string mensaje = "";
            response.TransaccionCompleta = negocios.ValidarPago(out mensaje,
                                           request.TipoTarjeta, request.NumeroTarjeta,
                                           request.TitularTarjeta, request.MontoConsumir,
                                           request.MesExpiracionTarjeta, request.AñoExpiracionTarjeta,
                                           request.CodigoSeguridadTarjeta);
            response.TransaccionMensaje = mensaje;

            return response;
        }
    }
}

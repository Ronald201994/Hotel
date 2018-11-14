using Hotel.Datos;
using Hotel.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.Negocios
{
    public class ValidarPagoNegocios
    {
        TarjetaDatos tarjetaDatos = new TarjetaDatos();
        public bool ValidarPago(out string mensaje,
                                int tipoTarjeta,
                                string numeroTarjeta,
                                string titularTarjeta,
                                double montoConsumir,
                                string mesExpiracion,
                                string añoExpiracion,
                                string codigoSeguridad)
        {
            bool ValidacionCorrecta = false;

            mensaje = "";

            TarjetaInfo tarjetaInfo = tarjetaDatos.ObtenerInformacionTarjeta(tipoTarjeta, numeroTarjeta, titularTarjeta, 
                                                    mesExpiracion, añoExpiracion,codigoSeguridad);

            if(tarjetaInfo == null)
            {
                mensaje = "Tarjeta no existe";
            }else
            {
                if (!tarjetaInfo.tarjetaHabilitada)
                {
                    mensaje = "Tarjeta No Habilitada";
                }
                else
                {
                    if(tarjetaInfo.creditoDisponible < montoConsumir)
                    {
                        mensaje = "Linea de credito insuficiente";
                    }
                    else
                    {
                        ValidacionCorrecta = true;
                        mensaje = "Usted realizò el pago";
                    }
                }
                
            }

            return ValidacionCorrecta;
        }
    }
}

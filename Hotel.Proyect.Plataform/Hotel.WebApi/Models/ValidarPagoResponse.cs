﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hotel.WebApi.Models
{
    public class ValidarPagoResponse
    {
        public bool TransaccionCompleta { get; set; }
        public string TransaccionMensaje { get; set; }
    }
}
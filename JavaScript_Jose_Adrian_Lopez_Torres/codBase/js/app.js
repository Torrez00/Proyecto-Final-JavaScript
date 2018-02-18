  //Variables
  var Display;
  var Reset;
  var Signo;
  var Raiz;
  var Division;
  var Multiplicacion;
  var Suma;
  var Resta;
  var Resultado;
  var Punto;
  var Uno;
  var Dos;
  var Tres;
  var Cuatro;
  var Cinco;
  var Seis;
  var Siete;
  var Ocho;
  var Nueve;
  var Cero;
  var Equis;
  var Ye;
  var Operacion;
  var Igual;
  var Conversion;
  var Tamaño;

  //Asignacion
  Display = document.getElementById('display');
  Reset = document.getElementById('on');
  Signo = document.getElementById('sign');
  Raiz = document.getElementById('raiz');
  Division = document.getElementById('dividido');
  Multiplicacion = document.getElementById('por');
  Suma = document.getElementById('mas');
  Resta = document.getElementById('menos');
  Igual = document.getElementById('igual');
  Punto = document.getElementById('punto');
  Uno = document.getElementById('1');
  Dos = document.getElementById('2');
  Tres = document.getElementById('3');
  Cuatro = document.getElementById('4');
  Cinco = document.getElementById('5');
  Seis = document.getElementById('6');
  Siete = document.getElementById('7');
  Ocho = document.getElementById('8');
  Nueve = document.getElementById('9');
  Cero = document.getElementById('0');
  Equis = 0;
  Ye = 0;
  Operacion = 0;

  //Botones
  function BotonCero ()
  {
    if (Display.innerHTML == Resultado)
    {
      Display.innerHTML = "0";
      CambiodeTamañoCero ();
    }
    else
    {
      if (Display.innerHTML == "0" )
     {
        Display.innerHTML = "0";
        CambiodeTamañoCero ();
      }
      else if (Display.innerHTML.length == 8)
      {
          Display.innerHTML = Display.innerHTML;
          CambiodeTamañoCero ();
      }
      else
      {
          Display.innerHTML = Display.innerHTML + "0";
          CambiodeTamañoCero ();
      }
    }
  }

  function BotonUno ()
  {
    if (Display.innerHTML == Resultado)
    {
      Display.innerHTML = "1";
      CambiodeTamañoUno ();
    }
    else
    {
      if (Display.innerHTML == "0" )
     {
        Display.innerHTML = "1";
        CambiodeTamañoUno ();
      }
      else if (Display.innerHTML.length == 8)
      {
          Display.innerHTML = Display.innerHTML;
          CambiodeTamañoUno ();
      }
      else
      {
          Display.innerHTML = Display.innerHTML + "1";
          CambiodeTamañoUno ();
      }
    }
  }

  function BotonDos ()
  {
    if (Display.innerHTML == Resultado)
    {
      Display.innerHTML = "2";
      CambiodeTamañoDos ();
    }
    else
    {
      if (Display.innerHTML == "0" )
     {
        Display.innerHTML = "2";
        CambiodeTamañoDos ();
      }
      else if (Display.innerHTML.length == 8)
      {
          Display.innerHTML = Display.innerHTML;
          CambiodeTamañoDos ();
      }
      else
      {
          Display.innerHTML = Display.innerHTML + "2";
          CambiodeTamañoDos ();
      }
    }
  }

  function BotonTres ()
  {
    if (Display.innerHTML == Resultado)
    {
      Display.innerHTML = "3";
      CambiodeTamañoTres ();
    }
    else
    {
      if (Display.innerHTML == "0" )
     {
        Display.innerHTML = "3";
        CambiodeTamañoTres ();
      }
      else if (Display.innerHTML.length == 8)
      {
          Display.innerHTML = Display.innerHTML;
          CambiodeTamañoTres ();
      }
      else
      {
          Display.innerHTML = Display.innerHTML + "3";
          CambiodeTamañoTres ();
      }
    }
  }

  function BotonCuatro ()
  {
    if (Display.innerHTML == Resultado)
    {
      Display.innerHTML = "4";
      CambiodeTamañoCuatro ();
    }
    else
    {
      if (Display.innerHTML == "0" )
     {
        Display.innerHTML = "4";
        CambiodeTamañoCuatro ();
      }
      else if (Display.innerHTML.length == 8)
      {
          Display.innerHTML = Display.innerHTML;
          CambiodeTamañoCuatro ();
      }
      else
      {
          Display.innerHTML = Display.innerHTML + "4";
          CambiodeTamañoCuatro ();
      }
    }
  }

  function BotonCinco ()
  {
    if (Display.innerHTML == Resultado)
    {
      Display.innerHTML = "5";
      CambiodeTamañoCinco ();
    }
    else
    {
      if (Display.innerHTML == "0" )
     {
        Display.innerHTML = "5";
        CambiodeTamañoCinco ();
      }
      else if (Display.innerHTML.length == 8)
      {
          Display.innerHTML = Display.innerHTML;
          CambiodeTamañoCinco ();
      }
      else
      {
          Display.innerHTML = Display.innerHTML + "5";
          CambiodeTamañoCinco ();
      }
    }
  }

  function BotonSeis ()
  {
    if (Display.innerHTML == Resultado)
    {
      Display.innerHTML = "6";
      CambiodeTamañoSeis ();
    }
    else
    {
      if (Display.innerHTML == "0" )
     {
        Display.innerHTML = "6";
        CambiodeTamañoSeis ();
      }
      else if (Display.innerHTML.length == 8)
      {
          Display.innerHTML = Display.innerHTML;
          CambiodeTamañoSeis ();
      }
      else
      {
          Display.innerHTML = Display.innerHTML + "6";
          CambiodeTamañoSeis ();
      }
    }
  }

  function BotonSiete ()
  {
    if (Display.innerHTML == Resultado)
    {
      Display.innerHTML = "7";
      CambiodeTamañoSiete ();
    }
    else
    {
      if (Display.innerHTML == "0" )
     {
        Display.innerHTML = "7";
        CambiodeTamañoSiete ();
      }
      else if (Display.innerHTML.length == 8)
      {
          Display.innerHTML = Display.innerHTML;
          CambiodeTamañoSiete ();
      }
      else
      {
          Display.innerHTML = Display.innerHTML + "7";
          CambiodeTamañoSiete ();
      }
    }
  }

  function BotonOcho ()
  {
    if (Display.innerHTML == Resultado)
    {
      Display.innerHTML = "8";
      CambiodeTamañoOcho ();
    }
    else
    {
      if (Display.innerHTML == "0" )
     {
        Display.innerHTML = "8";
        CambiodeTamañoOcho ();
      }
      else if (Display.innerHTML.length == 8)
      {
          Display.innerHTML = Display.innerHTML;
          CambiodeTamañoOcho ();
      }
      else
      {
          Display.innerHTML = Display.innerHTML + "8";
          CambiodeTamañoOcho ();
      }
    }
  }

  function BotonNueve ()
  {
    if (Display.innerHTML == Resultado)
    {
      Display.innerHTML = "9";
      CambiodeTamañoNueve ();
    }
    else
    {
      if (Display.innerHTML == "0" )
     {
        Display.innerHTML = "9";
        CambiodeTamañoNueve ();
      }
      else if (Display.innerHTML.length == 8)
      {
          Display.innerHTML = Display.innerHTML;
          CambiodeTamañoNueve ();
      }
      else
      {
          Display.innerHTML = Display.innerHTML + "9";
          CambiodeTamañoNueve ();
      }
    }
  }

  function Inicio ()
  {
    Display.innerHTML = "0";
    Equis = 0;
    Ye = 0;
    Resultado = 0;
    Operacion = "";
    CambiodeTamañoReset ();
  }

  function OperacionSuma ()
  {
      Equis = Display.innerHTML;
      Operacion = "+";
      Display.innerHTML = "0";
      CambiodeTamañoSuma ();
  }

  function OperacionResta ()
  {
      Equis = Display.innerHTML;
      Operacion = "-";
      Display.innerHTML = "0";
      CambiodeTamañoResta ();
  }

  function OperacionMultiplicacion ()
  {
      Equis = Display.innerHTML;
      Operacion = "*";
      Display.innerHTML = "0";
      CambiodeTamañoMultiplicacion ();
  }

  function OperacionDivision ()
  {
      Equis = Display.innerHTML;
      Operacion = "/";
      Display.innerHTML = "0";
      CambiodeTamañoDivision ();
  }

  function Resolver ()
  {
    switch (Operacion)
    {
      case "+":
        Resultado = parseFloat(Equis) + parseFloat(Ye);
      break;

      case "-":
        Resultado = parseFloat(Equis) - parseFloat(Ye);
      break;

      case "*":
        Resultado = parseFloat(Equis) * parseFloat(Ye);
      break;

      case "/":
        Resultado = parseFloat(Equis) / parseFloat(Ye);
      break;
    }
  }

  function Total ()
  {
    if (Display.innerHTML == Resultado)
    {
        Equis = Resultado;
        Resolver ();
        Display.innerHTML = Resultado;
        CambiodeTamañoIgual ();
    }
    else
    {
      Ye = Display.innerHTML;
      Resolver ();
      Tamaño = Resultado.toString().length;
      if (Tamaño >  8)
      {
        Display.innerHTML = Resultado.toString().slice(0,8);
      }
      else
      {
        Display.innerHTML = Resultado;
        CambiodeTamañoIgual ();
      }
    }
  }

  function BotonPunto ()
  {
    if (Display.innerHTML != 0)
    {
        if (Display.innerHTML.length == 8)
        {
           Display.innerHTML = Display.innerHTML;
           CambiodeTamañoPunto ();
        }
       else
       {
           if (Display.innerHTML.includes ('.') == true)
         {
            Display.innerHTML = Display.innerHTML;
            CambiodeTamañoPunto ();
         }
         else
         {
            Display.innerHTML = Display.innerHTML + ".";
            CambiodeTamañoPunto ();
         }
      }
    }
  }

  function BotonSigno ()
  {
    if (Display.innerHTML == 0)
    {
        Display.innerHTML = Display.innerHTML;
        CambiodeTamañoSigno ();
    }
    else if(Display.innerHTML < 0)
    {
        Display.innerHTML = Display.innerHTML * -1;
        CambiodeTamañoSigno ();
    }
    else
    {
        Display.innerHTML = "-" + Display.innerHTML;
        CambiodeTamañoSigno ();
    }
  }

  Reset.onclick = Inicio;
  Cero.onclick = BotonCero;
  Uno.onclick = BotonUno;
  Dos.onclick = BotonDos;
  Tres.onclick = BotonTres;
  Cuatro.onclick = BotonCuatro;
  Cinco.onclick = BotonCinco;
  Seis.onclick = BotonSeis;
  Siete.onclick = BotonSiete;
  Ocho.onclick = BotonOcho;
  Nueve.onclick = BotonNueve;
  Punto.onclick = BotonPunto;
  Suma.onclick = OperacionSuma;
  Resta.onclick =  OperacionResta;
  Multiplicacion.onclick = OperacionMultiplicacion;
  Division.onclick = OperacionDivision;
  Igual.onclick = Total;
  Signo.onclick = BotonSigno;

  //Cambio de Tamaño
  function CambiodeTamañoCero()
  {
    Cero.style.width = "27%";
    Cero.style.heght = "57px";
    window.setTimeout (function()
    {
      Cero.style.width = "29%";
      Cero.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoUno()
  {
    Uno.style.width = "27%";
    Uno.style.heght = "57px";
    window.setTimeout (function()
    {
      Uno.style.width = "29%";
      Uno.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoDos()
  {
    Dos.style.width = "27%";
    Dos.style.heght = "57px";
    window.setTimeout (function()
    {
      Dos.style.width = "29%";
      Dos.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoTres()
  {
    Tres.style.width = "27%";
    Tres.style.heght = "57px";
    window.setTimeout (function()
    {
      Tres.style.width = "29%";
      Tres.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoCuatro()
  {
    Cuatro.style.width = "20%";
    Cuatro.style.heght = "57px";
    window.setTimeout (function()
    {
      Cuatro.style.width = "22%";
      Cuatro.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoCinco()
  {
    Cinco.style.width = "20%";
    Cinco.style.heght = "57px";
    window.setTimeout (function()
    {
      Cinco.style.width = "22%";
    Cinco.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoSeis()
  {
    Seis.style.width = "20%";
    Seis.style.heght = "57px";
    window.setTimeout (function()
    {
      Seis.style.width = "22%";
      Seis.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoSiete()
  {
    Siete.style.width = "20%";
    Siete.style.heght = "57px";
    window.setTimeout (function()
    {
      Siete.style.width = "22%";
      Siete.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoOcho()
  {
    Ocho.style.width = "20%";
    Ocho.style.heght = "57px";
    window.setTimeout (function()
    {
      Ocho.style.width = "22%";
      Ocho.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoNueve()
  {
    Nueve.style.width = "20%";
    Nueve.style.heght = "57px";
    window.setTimeout (function()
    {
      Nueve.style.width = "22%";
      Nueve.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoReset()
  {
    Reset.style.width = "20%";
    Reset.style.heght = "57px";
    window.setTimeout (function()
    {
      Reset.style.width = "22%";
      Reset.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoPunto()
  {
    Punto.style.width = "27%";
    Punto.style.heght = "57px";
    window.setTimeout (function()
    {
      Punto.style.width = "29%";
      Punto.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoSigno()
  {
    Signo.style.width = "20%";
    Signo.style.heght = "57px";
    window.setTimeout (function()
    {
      Signo.style.width = "22%";
      Signo.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoIgual()
  {
    Igual.style.width = "27%";
    Igual.style.heght = "57px";
    window.setTimeout (function()
    {
      Igual.style.width = "29%";
      Igual.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoSuma()
  {
    Suma.style.width = "85%";
    Suma.style.heght = "95%";
    window.setTimeout (function()
    {
      Suma.style.width = "90%";
      Suma.style.height = "100%";
    }, 100)
  }

  function CambiodeTamañoResta()
  {
    Resta.style.width = "20%";
    Resta.style.heght = "57px";
    window.setTimeout (function()
    {
      Resta.style.width = "22%";
      Resta.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoMultiplicacion()
  {
    Multiplicacion.style.width = "20%";
    Multiplicacion.style.heght = "57px";
    window.setTimeout (function()
    {
      Multiplicacion.style.width = "22%";
      Multiplicacion.style.height = "62.91px";
    }, 100)
  }

  function CambiodeTamañoDivision()
  {
    Division.style.width = "20%";
    Division.style.heght = "57px";
    window.setTimeout (function()
    {
      Division.style.width = "22%";
      Division.style.height = "62.91px";
    }, 100)
  }

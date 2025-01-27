/*

  Ejercios de calculadora en JS (Seccion1)

 1. Crear una calculadora funcional con HTML, CSS y JS.
 La calculadora debe tener botones para los numeros del 0 al 9.
 Botones de sumar, restar, multiplicar y dividir.
 Botones de parentesis y de borrar.
 Debe tener un boton para resolver la operacion ("="). <- eval()
 Debe poder trabajar con numeros decimales.

 Opcional:
 - Debe sacar porcentajes tambien.
 - Debe poder limpiar la pantalla.
 - El estilo visual de la calculadora debe parecerse al 
 de una calculadora real.

 2. Crea un personaje (imagen) que se mueva en la 
 dirección que presiones en las teclas direccionales.

 Pista: onkeydown y onkeyup.

 Opcional:
 - La imagen debe cambiar su orientacion dependiendo
 de la direccion. (Arriba, abajo, izquierda, derecha)

 fecha entrega: 20/01/2025.

*/

function agregar(elemento){
    let pantalla = document.getElementById("display");
    pantalla.value = pantalla.value + elemento;
  }
  
  function limpiar(){
    let pantalla = document.getElementById("display");
    pantalla.value = "";
  }
  
  function borrar(){
    let pantalla = document.getElementById("display");
    pantalla.value = pantalla.value.slice(0,-1);
  }
  
  function resolver(){
    let pantalla = document.getElementById("display");
    pantalla.value = eval(pantalla.value);
  }
  
  
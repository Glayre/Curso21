function actualizarSemaforo(color) {  
    switch (color) {  
        case 'rojo':  
            return 'verde';  
        case 'verde':  
            return 'amarillo';  
        case 'amarillo':  
            return 'rojo';  
        default:  
            return 'Color no válido';  
    }  
}  

console.log(`Para ${color} la siguiente luz debe ser: ${actualizarSemaforo(color)}`);  


function contar(n = 0, y = 0) {
    if (n > y) {
      return; //Condicion de salida
    }
    console.log(n); //Imprime el valor de n
    contar(n + 1, y); //Llamada recursiva con n + 1
  }
  
  contar(10, 1);
  contar(1, 10); //Ejecuta la funcion contar desde 1 hasta 10
  contar(10, 1);
  contar(5,5);


  //Ejercicio fácil
/*
  Crea una función que cuente desde N hasta 0 de forma descendente y de dos en dos
*/

//Ejercicio intermedio
/*
  Crea una función que calcule el factorial de un número N. El factorial de un número N es el producto de todos los números enteros desde 1 hasta N.
  Por ejemplo, el factorial de 5 es 5 * 4 * 3 * 2 * 1 = 120.
*/

//Ejercicio avanzado
/*
  Crea una función que calcule la serie de Fibonacci hasta el número N. La serie de Fibonacci es una secuencia de números donde cada número es la suma de los dos anteriores. 
  Por ejemplo, la serie de Fibonacci hasta 10 es: 0, 1, 1, 2, 3, 5, 8.
  La serie comienza con 0 y 1, y luego cada número es la suma de los dos anteriores.
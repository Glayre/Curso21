//FUNCIONES
/*
  Las funciones son bloques de código que se pueden reutilizar. Se definen con la palabra clave function, seguida del nombre de la función, paréntesis y llaves. Dentro de los paréntesis se pueden definir parámetros que permiten pasar información a la función. 
*/

// declaracion de la funcion
function saludar() {
    console.log("Hola, mundo!"); //Imprime "Hola, mundo!" en la consola
  }
  
  // llamada a la funcion
  saludar(); //Ejecuta la funcion saludar
  saludar(); //Ejecuta la funcion saludar
  saludar(); //Ejecuta la funcion saludar
  
  //Ejemplo de funcion con parametros
  function saludarConNombre(nombre = "Jhon", apellido = "") {
    if (typeof nombre !== "string" || typeof apellido !== "string") {
      console.log("Error: El nombre y el apellido deben ser cadenas de texto.");
      return;
    }
    console.log("Hola " + nombre + " " + apellido); //Imprime "Hola, nombre!" en la consola
  }
  
  saludarConNombre(2, "hola"); //Ejecuta la funcion saludarConNombre con el parametro "Juan"
  saludarConNombre("Pedro", "Daza"); //Ejecuta la funcion saludarConNombre con el parametro "Pedro"
  saludarConNombre("Maria", "Paloma"); //Ejecuta la funcion saludarConNombre con el parametro "Maria"
  saludarConNombre("Luis"); //Ejecuta la funcion saludarConNombre con el parametro "Luis"
  
  /*
    Alcance
    Alcance de las variables:
    - let y const tienen un alcance de bloque, es decir, solo son accesibles dentro del bloque donde se definen.
    - var tiene un alcance de función, es decir, es accesible dentro de la función donde se define, o global si se define fuera de una función.
  
      let y = 20; // y es accesible dentro del bloque
      const z = 30; // z es accesible dentro del bloque
  
      if(true) {
        var x = 10; // x es accesible fuera del bloque
        let y = 20; // y no es accesible fuera del bloque
        const z = 30; // z no es accesible fuera del bloque
      }
  
      if(true) {
        let y = 20; // y no es accesible fuera del bloque
        const z = 30; // z no es accesible fuera del bloque
      }
      console.log(x,y,z) // x es 10, y y z no son accesibles
  
      //Ejercicio de alcance
      let x = "Hola";
      if(true){
        let y = "Saludos";
        if(y){
          if(x){
            let z = "Bienvenido";
          }
          console.log(x,y,z);
        }
      } else{
        console.log(x,y,z)
      }
  
      //Alcance de las funciones
      Las funciones tienen su propio alcance, es decir, las variables definidas dentro de una función no son accesibles fuera de ella.
  
      function saludar() {
        var nombre = "Juan"; // nombre es accesible dentro de la función
        console.log("Hola " + nombre); //Imprime "Hola, Juan!" en la consola
      }
  
      saludar(); //Ejecuta la funcion saludar
      console.log(nombre); //Error: nombre no es accesible fuera de la función
    */
  
  //funcion sin retorno
  function saludarSinRetorno(nombre) {
    console.log("Hola " + nombre); //Imprime "Hola, nombre!" en la consola
  }
  //Funcion con retorno
  function saludarConRetorno(nombre) {
    return "Hola " + nombre; //Devuelve "Hola, nombre!" como resultado de la funcion
  }
  
  saludarSinRetorno("Juan"); //Ejecuta la funcion saludarSinRetorno con el parametro "Juan"
  saludarConRetorno("Pedro"); //Ejecuta la funcion saludarConRetorno con el parametro "Pedro"
  
  console.log(saludarConRetorno("Pedro"));
  console.log(saludarSinRetorno("Pedro"));
  
  /*
    Recursion
    La recursion es una técnica de programación donde una función se llama a sí misma para resolver un problema. 
    Es útil cuando deseas ejecutar una tarea repetitiva o dividir un problema en subproblemas más pequeños.
    Sin embargo, es importante tener cuidado con la recursion, ya que puede llevar a un desbordamiento de pila si 
    no se maneja correctamente.
    Para evitar esto, asegúrate de tener una condición de salida que detenga la recursion en algún momento.
  */
  
  //Ejemplo de recursion, contador de n hasta y de uno en uno de forma ascendente
  function contar(n = 0, y = 0) {
    if (n > y) {
      return; //Condicion de salida
    }
    console.log(n); //Imprime el valor de n
    contar(n + 1, y); //Llamada recursiva con n + 1
  }
  
  contar(1, 10); //Ejecuta la funcion contar desde 1 hasta 10
  contar(10, 1); //
  contar(5, 5);
  
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
  */
  
  /**
   * @function fibonacci
   * @description Calcula la serie de Fibonacci hasta un número límite.
   * @param {*} limite - Límite hasta donde se calculará la serie de Fibonacci.
   * @param {*} resultado_anterior - Valor anterior en la serie de Fibonacci.
   * @param {*} resultado_actual - Valor actual en la serie de Fibonacci.
   * @example fibonacci(10) // 0, 1, 1, 2, 3, 5, 8
   * @returns {void} - No devuelve nada, solo imprime la serie de Fibonacci en la consola.
   * @author Juan Rodriguez
   * @date 2025-05-02
   * @version 1.0.0
   * @see {@link https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci} para más información sobre la serie de Fibonacci.
   * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function} para más información sobre funciones en JavaScript.
   */
  function fibonacci(limite, resultado_anterior = 0, resultado_actual = 1) {
    if (resultado_actual > limite) {
      return;
    }
    console.log(resultado_actual);
    fibonacci(limite, resultado_actual, resultado_anterior + resultado_actual);
  }
  
  fibonacci(10); //Ejecuta la funcion fibonacci hasta el limite 10
  
  /**
   * Convenciones de nombres
   * - Usa camelCase para nombres de variables y funciones (ejemplo: miVariable, calcularSuma).
   * - Usa PascalCase para nombres de clases (ejemplo: MiClase).
   * - Usa snake_case para nombres de archivos (ejemplo: mi_archivo.js).
   * - Usa UPPER_SNAKE_CASE para constantes (ejemplo: PI, MAX_VALUE).
   * - Usa nombres descriptivos y significativos para variables y funciones.
   * - Evita abreviaciones innecesarias y nombres confusos.
   * - Usa nombres en inglés para variables y funciones, a menos que estés trabajando en un proyecto específico en otro idioma.
   */
  
  /*
    En javascript los datos tienen metodos y propiedades, por lo que se pueden manipular de diferentes maneras.
    Por ejemplo, los strings tienen metodos como .toUpperCase(), .toLowerCase(), .length, .charAt(), .indexOf(), .substring(), .slice(), .split(), .replace(), entre otros.
  */
  
  const nombre = "Juan Rodriguez";
  console.log(nombre.length); //Imprime la longitud del string
  //Metodos
  console.log(nombre.toUpperCase()); //Imprime el string en mayusculas
  console.log(nombre.toLowerCase()); //Imprime el string en minusculas
  console.log(nombre.charAt(0)); //Imprime el primer caracter del string
  console.log(nombre.indexOf("Rodriguez")); //Imprime la posicion de la palabra Rodriguez en el string
  console.log(nombre.substring(0, 4)); //Imprime los primeros 4 caracteres del string
  console.log(nombre.slice(0, 4)); //Imprime los primeros 4 caracteres del string
  console.log(nombre.split(" ")); //Imprime el string separado por espacios
  console.log(nombre.replace("Rodriguez", "Daza")); //Reemplaza Rodriguez por Daza en el string
  console.log(nombre.replaceAll("Juan", "Pedro")); //Reemplaza todas las ocurrencias de Juan por Pedro en el string
  console.log(nombre.trim()); //Elimina los espacios en blanco al inicio y al final del string
  
  /*
    Ejercicio
    Realiza un programa que cuenta la cantidad de palabras y un vocales que tiene un string.
    Por ejemplo, el string "Hola, soy Juan Rodriguez" tiene 4 palabras y 9 vocales.
  */
  
  //Calcular la cantidad de palabras
  const texto = "Hola, soy Juan Rodriguez"; //String a analizar
  const cantidadPalabras = texto.split(" ").length; //Cantidad de palabras
  let cantidadDeVocales = 0; //Contador de vocales
  
  function contarVocales(texto, contador = 0) {
    if (contador >= texto.length) {
      return;
    }
    const letra = texto.charAt(contador).toLowerCase(); //Letra actual
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u" ||
      letra === "á" ||
      letra === "é" ||
      letra === "í" ||
      letra === "ó" ||
      letra === "ú"
    ) {
      cantidadDeVocales++; //Aumenta el contador de vocales
    }
    contarVocales(texto, contador + 1); //Llamada recursiva con el siguiente caracter
  }
  
  contarVocales(texto); //Ejecuta la funcion contarVocales desde el primer caracter
  
  console.log("Cantidad de palabras: " + cantidadPalabras); //Imprime la cantidad de palabras
  console.log("Cantidad de vocales: " + cantidadDeVocales); //Imprime la cantidad de vocales
  
  /*
    Ejercicios de metodos de string para estudiantes
    // sin investigar
    - Facil: Crea un programa que lea un string, lo limpie de espacios en blanco al inicio y al final y en caso de tener una longitud
    superior a 20, imprima solo los primeros 20 caracteres y tres puntos suspensivos al final.
  
    //sin investigar
    - Intermedio: Crea un programa que tome un string y cambie todas las vocales por el caracter "X".
  
    //sin investigar
    - Avanzado: Crea un programa que tome un string y lo invierta. Por ejemplo, el string "Hola" se convierte en "aloH".

  
    //opcional, pueden investigar
    - Experto: Crea un programa que tome un string y cuente la cantidad de veces que aparece cada letra en el string. Por ejemplo, el string "Hola" tiene 1 "H", 1 "o", 1 "l" y 1 "a".
  */






    
    function invertirString(str) {
        let invertido = "";
        for (let i = str.length - 1; i >= 0; i--) {
            invertido += str.charAt(i);
        }
        return invertido;
    }
    
    console.log(invertirString("Hola")); // Output: "aloH"


    function stringAlReves(texto, contador = 0, resultado = ""){
        if (contador >= texto.length) {
          return console.log(resultado);
        }
        resultado = resultado.replace(resultado.charAt(contador), texto.charAt(contador));
        stringAlReves(texto, contador + 1, resultado);
      }
      stringAlReves("Hola");

      function stringAlReves(texto, contador = 0, resultado = "") {
        if (contador >= texto.length) {
            console.log(resultado);
            return;
        }
        resultado = texto.charAt(contador) + resultado; // Agrega el carácter al inicio
        stringAlReves(texto, contador + 1, resultado);
    }
    
    stringAlReves("Hola"); // Output: "aloH"

    

/*
  Ejercicios de metodos de string para estudiantes
  // sin investigar
  - Facil: Crea un programa que lea un string, lo limpie de espacios en blanco al inicio y al final y en caso de tener una longitud
  superior a 20, imprima solo los primeros 20 caracteres y tres puntos suspensivos al final.

  //sin investigar
  - Intermedio: Crea un programa que tome un string y cambie todas las vocales por el caracter "X".

  //sin investigar
  - Avanzado: Crea un programa que tome un string y lo invierta. Por ejemplo, el string "Hola" se convierte en "aloH".

  //opcional, pueden investigar
  - Experto: Crea un programa que tome un string y cuente la cantidad de veces que aparece cada letra en el string. Por ejemplo, el string "Hola" tiene 1 "H", 1 "o", 1 "l" y 1 "a".
*/

function caracteres(string = "") {
    let frase = string.trim();
    nuevaFrase = "";
    if (frase.length > 20) {
      nuevaFrase = frase.slice(0, 20);
    }
    return nuevaFrase.concat('...');
  }
  
  console.log(caracteres('    as hdk jhaskdhasjk ldhljkashjkdlashjkd hasjkdjasdhaskd           '));
  
  
  
  
  function cambiarVocalesPorX(texto, contador = 0) {
    if (contador >= texto.length) {
      return texto;
    }
    const letra = texto.charAt(contador).toLowerCase(); //Letra actual
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u" ||
      letra === "á" ||
      letra === "é" ||
      letra === "í" ||
      letra === "ó" ||
      letra === "ú"
    ) {
      console.log(letra);
    }
    cambiarVocalesPorX(texto, contador + 1); //Llamada recursiva con el siguiente caracter
  }
  
  console.log(cambiarVocalesPorX(texto = "Hola, soy un String")); //Ejecuta la funcion cambiarVocalesPorZ desde el primer caracter
  
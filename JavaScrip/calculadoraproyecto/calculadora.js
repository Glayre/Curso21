document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");

  // Captura eventos de teclado para permitir la entrada y ejecución desde el teclado
  document.addEventListener("keydown", (event) => {
      if (/^[0-9+\-*/().^]$/.test(event.key)) {
          appendValue(event.key);
      } else if (event.key === "Enter") {
       +   event.preventDefault();
          calculate();
      } else if (event.key === "Escape") {
          clearDisplay();
      } else if (event.key === "Backspace") {
          deleteLast();
      }
  });
});

/**
 * Agrega un valor al campo de entrada de la calculadora.
 *
 * @param {string} value - El valor que se agregará al display.
 */
function appendValue(value) {
  document.getElementById('display').value += value;
}

/**
 * Borra todo el contenido del campo de entrada de la calculadora.
 */
function clearDisplay() {
    document.getElementById('display').value = '';
}

/**
 * Borra el último carácter del campo de entrada.
 */
function deleteLast() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

/**
 * Evalúa la expresión matemática ingresada y muestra el resultado en pantalla.
 *
 * @throws {Error} Muestra una alerta si la expresión ingresada es inválida.
 */
function calculate() {
  let input = document.getElementById('display').value;

  /**
   * Validación de entrada para evitar caracteres no permitidos.
   * Permite números, operadores matemáticos básicos (+, -, *, /), paréntesis y exponentes (^).
   */
  if (/[^0-9+\-*/().^]/.test(input)) {
      alert("Entrada inválida.");
      return;
  }

  // Convierte el operador de potencia (^) a la sintaxis de JavaScript (**)
  input = input.replace(/\^/g, '**');

  try {
      document.getElementById('display').value = eval(input);
  } catch (error) {
      alert("Error en la expresión.");
  }
}


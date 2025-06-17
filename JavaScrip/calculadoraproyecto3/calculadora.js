/**
 * Este script maneja la lógica de una calculadora basada en JavaScript,
 * permitiendo la entrada de datos a través del teclado y los botones de la interfaz.
 * 
 * Funcionalidades principales:
 * - Captura eventos de teclado para facilitar la entrada de valores.
 * - Operaciones básicas (+, -, *, /, ^) con validación mediante expresiones regulares.
 * - Conversión automática de ^ a ** para operaciones de potencia.
 * - Gestión del display mediante funciones de manipulación del DOM.
 */

document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");

  /**
   * Captura eventos de teclado y los procesa según el tipo de tecla presionada.
   *
   * @param {KeyboardEvent} event - Evento de teclado capturado.
   */
  document.addEventListener("keydown", (event) => {
    if (/^[0-9+\-*/().^]$/.test(event.key)) {
      appendValue(event.key);
    } else if (event.key === "Enter") {
      event.preventDefault();
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
  if (!/^[\d+\-*/().^]+$/.test(input)) {
    alert("Entrada inválida.");
    return;
  }

  // Convierte el operador de potencia (^) a la sintaxis de JavaScript (**)
  input = input.replace(/\^/g, '**');

  try {
    let result = Function('"use strict"; return (' + input + ')')();
    document.getElementById('display').value = result;
  } catch (error) {
    alert("Error en la expresión.");
  }
}

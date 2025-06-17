// Espera a que el contenido del DOM se cargue completamente antes de asignar eventos.
document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");

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
 * @param {string} value - Caracter a añadir en el campo de entrada.
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
 * Elimina el último carácter del campo de entrada.
 */
function deleteLast() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

/**
 * Evalúa la expresión matemática ingresada y muestra el resultado en pantalla.
 * Convierte el operador de potencia (^) a la sintaxis de JavaScript (**).
 * 
 * @returns {void} - Muestra el resultado en pantalla o un mensaje de error.
 */
function calculate() {
  let input = document.getElementById('display').value;

  // Validación: permite solo números y operadores matemáticos
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

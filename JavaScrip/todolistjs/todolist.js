/**
 * @constant {Array} tareas - Almacena la lista de tareas creadas por el usuario.
 */
let tareas = [];

/**
 * Muestra todas las tareas en la interfaz de usuario.
 * 
 * - Borra el contenido previo de la lista antes de actualizarla.
 * - Verifica si hay tareas disponibles.
 * - Si el array está vacío, muestra un mensaje en la consola.
 * - Recorre `tareas` con `.forEach()` y genera elementos `<li>` dinámicamente.
 * - Cada tarea incluye botones para marcarla como completada o eliminarla.
 */
function mostrarTareas() {
  let lista = document.getElementById("listaTareas"); // Obtiene el contenedor de la lista en el HTML
  lista.innerHTML = ""; // Limpia la lista antes de actualizarla

  if (tareas.length === 0) {
    console.log("La lista de tareas está vacía.");
    return;
    }

  tareas.forEach((tarea, indice) => {
    let li = document.createElement("li");
    li.className = tarea.completada ? "completed" : ""; // Aplica estilos según el estado de la tarea
    li.innerHTML = `
      ${tarea.nombre}
      <button onclick="marcarComoCompletada(${indice})">✔</button>
      <button onclick="eliminarTarea(${indice})">❌</button>
      `;
      lista.appendChild(li);
    });
}

/**
 * Agrega una nueva tarea a la lista.
 * 
 * @param {string} tarea - Nombre de la tarea a agregar.
 * 
 * - Verifica que la tarea no esté vacía usando `.trim().length`.
 * - Utiliza `.push()` para agregar la nueva tarea al array.
 * - Registra la acción en la consola y actualiza la lista de tareas.
 */
function agregarTarea(tarea) {
  if (tarea.trim().length === 0) {
    console.log("No se puede agregar una tarea vacía.");
    return;
    }

  tareas.push({ nombre: tarea, completada: false }); // Agrega la tarea al array con `.push()`
  console.log(`Tarea agregada: "${tarea}"`);
  mostrarTareas();
}

/**
 * Elimina una tarea de la lista según su índice.
 * 
 * @param {number} indice - Posición de la tarea en el array.
 * 
 * - Verifica que el índice sea válido y que la lista no esté vacía.
 * - Utiliza `.splice()` para eliminar la tarea del array.
 * - Registra la acción en la consola y actualiza la lista.
 */
function eliminarTarea(indice) {
  if (tareas.length > 0 && indice >= 0 && indice < tareas.length) {
    console.log(`Tarea eliminada: "${tareas[indice].nombre}"`);
    tareas.splice(indice, 1); // Elimina la tarea con `.splice()`
    mostrarTareas();
    } else {
    console.log("Índice inválido o lista vacía.");
    }
}

/**
 * Marca una tarea como completada o pendiente.
 * 
 * @param {number} indice - Índice de la tarea en el array.
 * 
 * - Alterna el estado de la tarea usando el operador `!`.
 * - Registra el cambio en la consola y actualiza la lista.
 */
function marcarComoCompletada(indice) {
  if (tareas.length > 0 && indice >= 0 && indice < tareas.length) {
    tareas[indice].completada = !tareas[indice].completada;
    console.log(`Tarea "${tareas[indice].nombre}" marcada como ${tareas[indice].completada ? "completada" : "pendiente"}`);
    mostrarTareas();
    } else {
    console.log("Índice inválido o lista vacía.");
    }
}

/**
 * Evento que permite agregar tareas al presionar "Enter" en el campo de entrada.
 * 
 * - Captura el valor del input y lo envía a `agregarTarea()`.
 * - Vacía el campo de entrada tras la acción.
 * 
 * @event keypress
 */
document.getElementById("tareaInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    agregarTarea(event.target.value);
    event.target.value = ""; // Vacía el campo de entrada después de agregar la tarea
    }
});

/**
 * Agrega una tarea cuando el usuario hace clic en el botón "Agregar".
 * 
 * - Obtiene el contenido del input y lo envía a `agregarTarea()`.
 * - Vacía el campo de entrada tras la acción.
 * 
 * @event click
 */
function agregarDesdeBoton() {
  let tareaInput = document.getElementById("tareaInput"); // Captura el input del usuario
  agregarTarea(tareaInput.value);
  tareaInput.value = ""; // Vacía el campo después de la acción
}

//Variables iniciales
let tareas = [];

//Mensaje de bienvenida
alert("Bienvenido a la lista de tareas");

/**
 * @function inicio
 * @description Función principal que inicia el programa
 * @returns {void}
 */
function inicio() {
  let opcion = prompt(
    "Selecciona una opción:\n1. Agregar tarea\n2. Ver tareas\n3. Eliminar tarea\n4. Marcar tarea como completada\n5. Salir"
  );
  if (opcion == 1) {
    agregarTarea();
  } else if (opcion == 2) {
    verTareas();
  } else if (opcion == 3) {
    eliminarTarea();
  } else if (opcion == 4) {
    marcarTareaCompletada();
  } else if (opcion == 5) {
    alert("Gracias por usar la lista de tareas");
    return;
  } else {
    alert("Opción no válida");
  }
  inicio();
}

/**
 * @function agregarTarea
 * @description Agrega una tarea a la lista
 * @returns {void}
 */
function agregarTarea() {
  let tarea = prompt("Ingresa la tarea que deseas agregar:");
  let tarea_objeto = {
    nombre: tarea,
    completada: false,
  };
  tareas.push(tarea_objeto);
}

/**
 * @function verTareas
 * @description Muestra la lista de tareas
 * @returns {void}
 */
function verTareas() {
  if (validarLargo()) {
    tareas.map((tarea, index) => {
      alert(
        `Tarea ${index + 1}: ${tarea.nombre} - ${
          tarea.completada ? "✅" : "❌"
        }`
      );
    });
  } else {
    inicio();
  }
}

/**
 * @function eliminarTarea
 * @description Elimina una tarea de la lista
 * @returns {void}
 */
function eliminarTarea() {
  if (validarLargo()) {
    verTareas();
    let tareaEliminar = prompt(
      "Ingresa el número de la tarea que deseas eliminar:"
    );
    if (validarRango(tareaEliminar)) {
      tareas.splice(tareaEliminar - 1, 1);
      alert("Tarea eliminada");
    }
  }
}

/**
 * @function marcarTareaCompletada
 * @description Marca una tarea como completada
 * @returns {void}
 */
function marcarTareaCompletada() {
  if (validarLargo()) {
    verTareas();
    let tareaCompletada = prompt(
      "Ingresa el número de la tarea que deseas marcar como completada:"
    );
    if (validarRango(tareaCompletada)) {
      tareas[tareaCompletada - 1].completada = true;
      alert("Tarea marcada como completada");
    }
  }
}

/**
 * @function validarRango
 * @description Valida si el número de tarea está dentro del rango de tareas
 * @param {*} tarea - Número de tarea a validar
 * @returns {boolean} true si el número de tarea es válido, false si no lo es
 */
function validarRango(tarea) {
  if (tarea > 0 && tarea <= tareas.length && !isNaN(tarea)) {
    return true;
  } else {
    alert("Número de tarea no válido");
    return false;
  }
}

/**
 * @function validarLargo
 * @description Valida si la lista de tareas está vacía
 * @returns {boolean} true si hay tareas, false si no hay tareas
 */
function validarLargo() {
  if (tareas.length == 0) {
    alert("No hay tareas en la lista");
    return false;
  } else {
    return true;
  }
}

//Ejecutar la función de inicio
inicio();
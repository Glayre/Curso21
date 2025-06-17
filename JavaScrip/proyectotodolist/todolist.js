// Array de tareas que almacena objetos con el texto y estado de cada tarea
let tareas = [];

/**
 * Agrega una nueva tarea a la lista.
 * @param {string} tareaInput - Texto de la tarea ingresada por el usuario.
 * Se valida que el campo no esté vacío antes de añadirlo.
 */
function agregarTarea() {
    let tareaInput = document.getElementById("tareaInput").value.trim();
    if (!tareaInput) return alert("Por favor, ingresa una tarea válida.");

    // Agrega un nuevo objeto al array con la tarea en estado "pendiente"
    tareas.push({ texto: tareaInput, completada: false });

    // Limpia el campo de entrada
    document.getElementById("tareaInput").value = "";
    
    // Actualiza la lista en la interfaz
    mostrarTareas();
}

/**
 * Muestra todas las tareas en la lista HTML.
 * Se usa `map()` para generar dinámicamente los elementos de la lista.
 */
function mostrarTareas() {
    const listaTareas = document.getElementById("listaTareas");
    
    // Genera el HTML de las tareas de forma eficiente con `map()` y `join()`
    listaTareas.innerHTML = tareas
        .map((tarea, indice) => `
            <li class="${tarea.completada ? 'completada' : ''}">
                ${tarea.texto}
                <button onclick="marcarComoCompletada(${indice})">
                    ${tarea.completada ? 'Desmarcar' : 'Completar'}
                </button>
                <button onclick="eliminarTarea(${indice})">Eliminar</button>
            </li>
        `)
        .join('');
}

/**
 * Elimina una tarea de la lista.
 * @param {number} indice - Índice de la tarea a eliminar.
 * Se usa `filter()` para excluir la tarea del array sin modificar el original.
 */
function eliminarTarea(indice) {
    tareas = tareas.filter((_, i) => i !== indice);
    mostrarTareas(); // Se actualiza la lista en la interfaz
}

/**
 * Cambia el estado de completado de una tarea.
 * @param {number} indice - Índice de la tarea a modificar.
 * Se alterna el valor `completada` entre `true` y `false`.
 */
function marcarComoCompletada(indice) {
    tareas[indice].completada = !tareas[indice].completada;
    mostrarTareas(); // Se actualiza la lista en la interfaz
}

let productId = 1; // Inicializa el ID en 1

// Evento que maneja el envío del formulario y la validación de datos
document.getElementById("productForm").addEventListener("submit", function(event) {
  event.preventDefault();

  /**
   * Expresiones regulares para validar los datos ingresados
   * @constant {RegExp} regexCodigoBarras - Valida código de barras (12 dígitos numéricos)
   * @constant {RegExp} regexPrecio - Valida precios en formato numérico con hasta dos decimales
   * @constant {RegExp} regexNombre - Valida nombre (solo letras y espacios)
   * @constant {RegExp} regexFecha - Valida fechas en formato YYYY-MM-DD
   */
  const regexCodigoBarras = /^\d{12}$/;
  const regexPrecio = /^\d+(\.\d{1,2})?$/;
  const regexNombre = /^[a-zA-Z\s]+$/;
  const regexFecha = /^\d{4}-\d{2}-\d{2}$/;

  /**
   * Obtención y validación de los datos del formulario
   * @param {number} id - ID único del producto
   * @param {string} nombre - Nombre del producto
   * @param {string} descripcion - Descripción del producto
   * @param {string} categoria - Categoría del producto
   * @param {string} subcategoria - Subcategoría del producto
   * @param {string} marca - Marca del producto
   * @param {string} modelo - Modelo del producto
   * @param {number} precioCompra - Precio de compra del producto
   * @param {number} precioVenta - Precio de venta del producto
   * @param {number} costoEnvio - Costo de envío del producto
   * @param {number} cantidadStock - Cantidad en stock disponible
   * @param {string} proveedor - Proveedor del producto
   * @param {string} fechaIngreso - Fecha de ingreso del producto
   * @param {string} fechaVencimiento - Fecha de vencimiento del producto (opcional)
   * @param {number} peso - Peso del producto en kilogramos
   * @param {number} largo - Largo del producto en centímetros
   * @param {number} ancho - Ancho del producto en centímetros
   * @param {number} alto - Alto del producto en centímetros
   * @param {string} color - Color del producto
   * @param {string} material - Material del producto
   * @param {string} codigoBarras - Código de barras del producto (12 dígitos)
   * @param {string} capacidad - Capacidad del producto
   * @param {string} voltaje - Voltaje del producto
   * @param {string} estado - Estado del producto (Activo/Inactivo)
   * @param {string} tags - Etiquetas del producto (tags separadas por comas)
   * @param {string} notas - Notas adicionales sobre el producto
   */
  const id = productId++;
  const nombre = document.getElementById("nombre").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const categoria = document.getElementById("categoria").value.trim();
  const subcategoria = document.getElementById("subcategoria").value.trim();
  const marca = document.getElementById("marca").value.trim();
  const modelo = document.getElementById("modelo").value.trim();
  const precioCompra = parseFloat(document.getElementById("precioCompra").value).toFixed(2);
  const precioVenta = parseFloat(document.getElementById("precioVenta").value).toFixed(2);
  const costoEnvio = parseFloat(document.getElementById("costoEnvio").value).toFixed(2);
  const cantidadStock = parseInt(document.getElementById("cantidadStock").value);
  const proveedor = document.getElementById("proveedor").value.trim();
  const fechaIngreso = document.getElementById("fechaIngreso").value;
  const fechaVencimiento = document.getElementById("fechaVencimiento").value || "N/A";
  const peso = parseFloat(document.getElementById("peso").value) || 0;
  const largo = parseFloat(document.getElementById("largo").value) || 0;
  const ancho = parseFloat(document.getElementById("ancho").value) || 0;
  const alto = parseFloat(document.getElementById("alto").value) || 0;
  const color = document.getElementById("color").value.trim() || "No especificado";
  const material = document.getElementById("material").value.trim() || "No especificado";
  const codigoBarras = document.getElementById("codigoBarras").value.trim();
  const capacidad = document.getElementById("capacidad").value.trim() || "No aplica";
  const voltaje = document.getElementById("voltaje").value.trim() || "No aplica";
  const estado = document.getElementById("estado").value;
  const tags = document.getElementById("tags").value.trim().split(",").map(tag => tag.trim()).join(", ");
  const notas = document.getElementById("notas").value.trim();

  // Validaciones con Regex
  if (!regexNombre.test(nombre)) {
    alert("El nombre solo debe contener letras y espacios.");
    return;
  }
  if (!regexCodigoBarras.test(codigoBarras)) {
    alert("El código de barras debe contener exactamente 12 dígitos numéricos.");
    return;
  }
  if (!regexPrecio.test(precioCompra) || !regexPrecio.test(precioVenta)) {
    alert("El precio debe ser un número válido con hasta dos decimales.");
    return;
  }
  if (fechaVencimiento !== "N/A" && !regexFecha.test(fechaVencimiento)) {
    alert("La fecha de vencimiento debe estar en formato YYYY-MM-DD.");
    return;
  }

  // Obtener imagen del producto
  const imagenInput = document.getElementById("imagenes");
  let imagenURL = imagenInput.files.length > 0 ? URL.createObjectURL(imagenInput.files[0]) : "";

  // Agregar producto a la tabla
  const table = document.querySelector("#productTable tbody");
  const row = table.insertRow();
  row.innerHTML = `
    <td>${id}</td>
    <td>${nombre}</td>
    <td>${descripcion}</td>
    <td>${categoria}</td>
    <td>${subcategoria}</td>
    <td>${marca}</td>
    <td>${modelo}</td>
    <td>${precioCompra}</td>
    <td>${precioVenta}</td>
    <td>${costoEnvio}</td>
    <td>${cantidadStock}</td>
    <td>${proveedor}</td>
    <td>${fechaIngreso}</td>
    <td>${fechaVencimiento}</td>
    <td>${peso} kg</td>
    <td>${largo} x ${ancho} x ${alto} cm</td>
    <td>${color}</td>
    <td>${material}</td>
    <td>${codigoBarras}</td>
    <td><img src="${imagenURL}" width="50"></td>
    <td>${capacidad}</td>
    <td>${voltaje}</td>
    <td>${estado}</td>
    <td>${tags}</td>
    <td>${notas}</td>
    <td>
      <button class="edit">Editar</button>
      <button class="delete">Eliminar</button>
    </td>
  `;

  // **Eliminar producto**
  row.querySelector(".delete").addEventListener("click", function() {
    table.deleteRow(row.rowIndex - 1);
  });

  // Limpiar formulario
  document.getElementById("productForm").reset();
});

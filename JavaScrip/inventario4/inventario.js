let productId = 1; // Inicializa el ID en 1

document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const id = productId++; // Asigna el ID y lo incrementa
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
    const fechaVencimiento = document.getElementById("fechaVencimiento").value;
    const peso = parseFloat(document.getElementById("peso").value).toFixed(2);
    const largo = parseFloat(document.getElementById("largo").value);
    const ancho = parseFloat(document.getElementById("ancho").value);
    const alto = parseFloat(document.getElementById("alto").value);
    const color = document.getElementById("color").value.trim();
    const material = document.getElementById("material").value.trim();
    const codigoBarras = document.getElementById("codigoBarras").value.trim();
    const capacidad = document.getElementById("capacidad").value.trim();
    const voltaje = document.getElementById("voltaje").value.trim();
    const estado = document.getElementById("estado").value;
    const tags = document.getElementById("tags").value.trim();
    const notas = document.getElementById("notas").value.trim();
    
    const imagenInput = document.getElementById("imagenes");
    let imagenURL = imagenInput.files.length > 0 ? URL.createObjectURL(imagenInput.files[0]) : "";

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
        <td>${capacidad}GB</td>
        <td>${voltaje}V</td>
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

    // **Editar producto**
    row.querySelector(".edit").addEventListener("click", function() {
        document.getElementById("nombre").value = nombre;
        document.getElementById("descripcion").value = descripcion;
        document.getElementById("categoria").value = categoria;
        document.getElementById("subcategoria").value = subcategoria;
        document.getElementById("marca").value = marca;
        document.getElementById("modelo").value = modelo;
        document.getElementById("precioCompra").value = precioCompra;
        document.getElementById("precioVenta").value = precioVenta;
        document.getElementById("costoEnvio").value = costoEnvio;
        document.getElementById("cantidadStock").value = cantidadStock;
        document.getElementById("proveedor").value = proveedor;
        document.getElementById("fechaIngreso").value = fechaIngreso;
        document.getElementById("fechaVencimiento").value = fechaVencimiento;
        document.getElementById("peso").value = peso;
        document.getElementById("largo").value = largo;
        document.getElementById("ancho").value = ancho;
        document.getElementById("alto").value = alto;
        document.getElementById("color").value = color;
        document.getElementById("material").value = material;
        document.getElementById("codigoBarras").value = codigoBarras;
        document.getElementById("capacidad").value = capacidad;
        document.getElementById("voltaje").value = voltaje;
        document.getElementById("estado").value = estado;
        document.getElementById("tags").value = tags;
        document.getElementById("notas").value = notas;

        table.deleteRow(row.rowIndex - 1);
    });

    document.getElementById("productForm").reset();
});

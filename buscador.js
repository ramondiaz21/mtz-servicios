let productosSeleccionados = [];
let productos = [
  { titulo: "Motor", nombreDelServicio: "Cambio de banda", precio: 0 },
  { titulo: "Motor", nombreDelServicio: "Cambio de termostato", precio: 0 },
  { titulo: "Motor", nombreDelServicio: "Cambio de alternador", precio: 0 },
  { titulo: "Motor", nombreDelServicio: "Cambio de reten", precio: 0 },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de empaque de cabeza",
    precio: 0,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Revisar y/o corregir falla",
    precio: 0,
  },
  { titulo: "Motor", nombreDelServicio: "Diagnosticar falla", precio: 0 },
  { titulo: "Motor", nombreDelServicio: "Corregir fuga de agua", precio: 0 },
  { titulo: "Motor", nombreDelServicio: "Cambio de radiador", precio: 0 },
  { titulo: "Motor", nombreDelServicio: "Cambio de poleas", precio: 0 },
  { titulo: "Motor", nombreDelServicio: "Cambio bomba de agua", precio: 0 },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio y/o reparación de bomba hidráulica",
    precio: 0,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de cables y/o bujías",
    precio: 0,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de filtro de aire",
    precio: 0,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de filtro de gasolina y/o diesel",
    precio: 0,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de filtro de aceite",
    precio: 0,
  },
  { titulo: "Motor", nombreDelServicio: "Cambio de aceite motor", precio: 0 },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de aceite hidráulico",
    precio: 0,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Revisión y/o cambio de mangueras del agua",
    precio: 0,
  },
  { titulo: "Motor", nombreDelServicio: "Sondear radiador", precio: 0 },
  { titulo: "Motor", nombreDelServicio: "Calibrar motor", precio: 0 },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Reparación de transmisión",
    precio: 0,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Cambio de aceite transmisión",
    precio: 0,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Limpieza de cedazo",
    precio: 0,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Cambio de filtro transmisión",
    precio: 0,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Corregir y/o cambiar mangueras de retorno",
    precio: 0,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Remover transmisión",
    precio: 0,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Cambio de electroválvula",
    precio: 0,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Checar falla y/o corregir",
    precio: 0,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Cambio de reten salida yugo",
    precio: 0,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Cambio de reten turbina",
    precio: 0,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Cambio de turbina",
    precio: 0,
  },
  {
    titulo: "Frenos",
    nombreDelServicio: "Cambiar bomba de frenos",
    precio: 0,
  },
  {
    titulo: "Frenos",
    nombreDelServicio: "Corregir fuga de líquido por gomas",
    precio: 0,
  },
  { titulo: "Frenos", nombreDelServicio: "Cambio de balatas", precio: 0 },
  { titulo: "Frenos", nombreDelServicio: "Cambio de maza", precio: 0 },
  { titulo: "Frenos", nombreDelServicio: "Cambio de retenes", precio: 0 },
  { titulo: "Frenos", nombreDelServicio: "Ajustar frenos", precio: 0 },
  {
    titulo: "Frenos",
    nombreDelServicio: "Checar falla en frenos",
    precio: 0,
  },
  {
    titulo: "Frenos",
    nombreDelServicio: "Cambio de cilindro de frenos",
    precio: 0,
  },
  {
    titulo: "Electrico",
    nombreDelServicio: "Checar y/o corregir falla",
    precio: 0,
  },
  {
    titulo: "Electrico",
    nombreDelServicio: "Cambio de computadora",
    precio: 0,
  },
  {
    titulo: "Electrico",
    nombreDelServicio: "Checar acumulador y carga",
    precio: 0,
  },
  {
    titulo: "Electrico",
    nombreDelServicio: "Cambio de alternador",
    precio: 0,
  },
  { titulo: "Patines", nombreDelServicio: "Reparar bomba", precio: 0 },
  // ... más productos
];

$(document).on("input", ".precio-input", function () {
  let nuevoPrecio = $(this).val();
  let titulo = $(this).data("titulo");
  let indice = $(this).data("indice");
  actualizarPrecio(titulo, indice, nuevoPrecio);
});

function buscarProducto() {
  // Obtener el valor del input y convertirlo a minúsculas
  let nombreServicio = document
    .getElementById("nombreServicio")
    .value.toLowerCase();

  // Mostrar los resultados en pantalla
  let resultadoDiv = document.getElementById("resultadoBusqueda");

  if (nombreServicio.trim() === "") {
    // Si el campo de entrada está vacío, limpiar la pantalla
    resultadoDiv.innerHTML = "";
    return;
  }

  // Realizar la búsqueda
  let resultadosBusqueda = productos.filter((producto) =>
    producto.nombreDelServicio.toLowerCase().includes(nombreServicio)
  );

  // Limpiar resultados anteriores
  resultadoDiv.innerHTML = "";

  if (resultadosBusqueda.length > 0) {
    resultadoDiv.innerHTML = "<h5>Resultados encontrados:</h5>";
    resultadosBusqueda.forEach((resultado) => {
      resultadoDiv.innerHTML += `
          <div class="search-wrapper">
            <div class="info-wrapper">
              <p>Título: ${resultado.titulo}</p>
              <p>Nombre del Servicio: <span class="result">${resultado.nombreDelServicio}</span></p>
              
            </div>
            <div class="check-wrapper">
              <input class="check" type="checkbox" onchange="agregarQuitarProducto('${resultado.nombreDelServicio}')">
            </div>
          </div>
          <hr style="width:100%; margin-left:0">
        `;
    });
  } else {
    resultadoDiv.innerHTML = "<p>No se encontraron resultados</p>";
  }
}


function agregarQuitarProducto(nombreServicio) {
  // Buscar el producto correspondiente al nombre del servicio
  let producto = productos.find((p) => p.nombreDelServicio === nombreServicio);

  // Verificar si el producto ya está seleccionado
  let productoExistente = productosSeleccionados.find(
    (p) => p.nombreDelServicio === nombreServicio
  );

  if (productoExistente) {
    // Si está seleccionado, quitarlo
    productosSeleccionados = productosSeleccionados.filter(
      (p) => p.nombreDelServicio !== nombreServicio
    );
  } else {
    // Si no está seleccionado, agregarlo con un precio predeterminado de 0
    productosSeleccionados.push({ ...producto, precio: 0 });
  }

  // Actualizar el contenido del modal-body
  actualizarModalBody();
}

function actualizarModalBody() {
  let modalBody = $("#modalBody");
  modalBody.html(""); // Limpiar el contenido

  // Agrupar productos seleccionados por título
  let productosAgrupados = {};
  productosSeleccionados.forEach((producto, index) => {
    if (!productosAgrupados[producto.titulo]) {
      productosAgrupados[producto.titulo] = [];
    }
    productosAgrupados[producto.titulo].push({
      ...producto,
      identificadorUnico: `${producto.nombreDelServicio}_${index}`,
    });
  });

  // Mostrar productos agrupados en el modal-body
  for (let titulo in productosAgrupados) {
    modalBody.append(`<h5>${titulo}</h5>`);
    productosAgrupados[titulo].forEach((producto) => {
      modalBody.append(`
        <div class="partida-wrapper">
          <p>${producto.nombreDelServicio}</p>
          <input type="number" value="${producto.precio}" onchange="actualizarPrecio('${producto.identificadorUnico}', this.value)">
        </div>
      `);
    });
    modalBody.append("<hr>");
  }

  // Calcular y mostrar la sumatoria antes y después del IVA
  let totalAntesIva = productosSeleccionados.reduce(
    (total, producto) => total + producto.precio,
    0
  );
  let iva = parseFloat($("#iva").val()) || 0;
  let totalDespuesIva = totalAntesIva * (1 + iva / 100);

  // Actualizar el contenido en el modal-footer
  $("#totalAntesIva").text(`Total antes de IVA: $${totalAntesIva.toFixed(2)}`);
  $("#totalDespuesIva").text(
    `Total después de IVA: $${totalDespuesIva.toFixed(2)}`
  );
}

function actualizarPrecio(identificadorUnico, nuevoPrecio) {
  // Obtener el nombre del servicio y el índice del identificador único
  let [nombreServicio, index] = identificadorUnico.split('_');

  // Actualizar el precio en la lista de productos seleccionados usando el nombre del servicio e índice
  productosSeleccionados = productosSeleccionados.map((producto, i) => {
    if (producto.nombreDelServicio === nombreServicio && i == index) {
      return { ...producto, precio: parseFloat(nuevoPrecio) || 0 };
    }
    return producto;
  });

  // Actualizar el contenido del modal-body
  actualizarModalBody();
}

// Agregar nuevo servicio desde el formulario
$("#agregarNuevoServicioBtn").click(function () {
  let nuevoServicioTitulo = $("#nuevoServicioTitulo").val();
  let nuevoServicioNombre = $("#nuevoServicioNombre").val();

  if (nuevoServicioTitulo && nuevoServicioNombre) {
    // Crear un nuevo producto con título y nombre proporcionados
    let nuevoProducto = {
      titulo: nuevoServicioTitulo,
      nombreDelServicio: nuevoServicioNombre,
      precio: 0, // Puedes establecer un valor predeterminado o dejarlo en 0
    };

    // Agregar el nuevo producto a la lista de productos seleccionados
    productosSeleccionados.push(nuevoProducto);

    // Actualizar el contenido del modal-body
    actualizarModalBody();

    // Limpiar los campos del formulario
    //$("#nuevoServicioTitulo").val("");
    $("#nuevoServicioNombre").val("");
  }
});

function imprimirCotizacion() {
  // Aquí puedes implementar la lógica para imprimir la cotización con los productos seleccionados
  // Puedes acceder a la lista de productos seleccionados usando la variable 'productosSeleccionados'
  // y realizar las acciones necesarias.
  console.log(
    "Imprimir cotización con productos seleccionados:",
    productosSeleccionados
  );
}

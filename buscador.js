let productosSeleccionados = [];
let productos = [
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de banda",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de termostato",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de alternador",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de reten",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de empaque de cabeza",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Revisar y/o corregir falla",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Diagnosticar falla",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Corregir fuga de agua",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de radiador",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de poleas",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio bomba de agua",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio y/o reparación de bomba hidráulica",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de cables y/o bujías",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de filtro de aire",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de filtro de gasolina y/o diesel",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de filtro de aceite",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de aceite motor",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Cambio de aceite hidráulico",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Revisión y/o cambio de mangueras del agua",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Sondear radiador",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Motor",
    nombreDelServicio: "Calibrar motor",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Reparación de transmisión",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Cambio de aceite transmisión",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Limpieza de cedazo",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Cambio de filtro transmisión",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Corregir y/o cambiar mangueras de retorno",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Remover transmisión",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Cambio de electroválvula",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Checar falla y/o corregir",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Cambio de reten salida yugo",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Cambio de reten turbina",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Transmisión",
    nombreDelServicio: "Cambio de turbina",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Frenos",
    nombreDelServicio: "Cambiar bomba de frenos",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Frenos",
    nombreDelServicio: "Corregir fuga de líquido por gomas",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Frenos",
    nombreDelServicio: "Cambio de balatas",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Frenos",
    nombreDelServicio: "Cambio de maza",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Frenos",
    nombreDelServicio: "Cambio de retenes",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Frenos",
    nombreDelServicio: "Ajustar frenos",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Frenos",
    nombreDelServicio: "Checar falla en frenos",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Frenos",
    nombreDelServicio: "Cambio de cilindro de frenos",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Electrico",
    nombreDelServicio: "Checar y/o corregir falla",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Electrico",
    nombreDelServicio: "Cambio de computadora",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Electrico",
    nombreDelServicio: "Checar acumulador y carga",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Electrico",
    nombreDelServicio: "Cambio de alternador",
    precio: 0,
    cantidad: 1,
  },
  {
    titulo: "Patines",
    nombreDelServicio: "Reparar bomba",
    precio: 0,
    cantidad: 1,
  },
  // ... más productos
];

$(document).on("input", ".precio-input", function () {
  let nuevoPrecio = $(this).val();
  let titulo = $(this).data("titulo");
  let indice = $(this).data("indice");
  actualizarPrecio(titulo, indice, nuevoPrecio);
});

$(document).on("change", ".check", function () {
  let nombreServicio = $(this).data("nombre");
  if ($(this).is(":checked")) {
    agregarProducto(nombreServicio);
  } else {
    quitarProducto(nombreServicio);
  }
});

function buscarProducto() {
  let nombreServicio = document
    .getElementById("nombreServicio")
    .value.toLowerCase();
  let resultadoDiv = document.getElementById("resultadoBusqueda");

  if (nombreServicio.trim() === "") {
    resultadoDiv.innerHTML = "";
    return;
  }

  let resultadosBusqueda = productos.filter((producto) =>
    producto.nombreDelServicio.toLowerCase().includes(nombreServicio)
  );

  resultadoDiv.innerHTML = "";

  if (resultadosBusqueda.length > 0) {
    resultadoDiv.innerHTML = "<h5>Resultados encontrados:</h5>";
    resultadosBusqueda.forEach((resultado) => {
      let checked = productosSeleccionados.some(
        (p) => p.nombreDelServicio === resultado.nombreDelServicio
      );
      resultadoDiv.innerHTML += `
          <div class="search-wrapper">
            <div class="info-wrapper">
              <p>Título: ${resultado.titulo}</p>
              <p>Nombre del Servicio: <span class="result">${
                resultado.nombreDelServicio
              }</span></p>
            </div>
            <div class="check-wrapper">
              <input class="check" type="checkbox" data-nombre="${
                resultado.nombreDelServicio
              }" ${checked ? "checked" : ""}>
            </div>
          </div>
          <hr style="width:100%; margin-left:0">
        `;
    });
  } else {
    resultadoDiv.innerHTML = "<p>No se encontraron resultados</p>";
  }
}

function agregarProducto(nombreServicio) {
  let producto = productos.find((p) => p.nombreDelServicio === nombreServicio);
  if (producto && !productosSeleccionados.includes(producto)) {
    productosSeleccionados.push(producto);
    actualizarModalBody();
  }
}

function quitarProducto(nombreServicio) {
  productosSeleccionados = productosSeleccionados.filter(
    (p) => p.nombreDelServicio !== nombreServicio
  );
  actualizarModalBody();
}

function actualizarModalBody() {
  let modalBody = $("#modalBody");
  modalBody.html("");

  let productosAgrupados = agruparProductosPorCategoria();
  let totalAntesIva = 0;

  for (let titulo in productosAgrupados) {
    modalBody.append(`<div class="titulo-modal-wrapper">
    <h5>${titulo}</h5> <input class="form-control" type="text"> </input>
    </div>`);
    productosAgrupados[titulo].forEach((producto) => {
      totalAntesIva += producto.precio;
      modalBody.append(`
        <div class="partida-wrapper">
        <input class="form-control input-sm" value="${producto.cantidad}" type="number" onchange="actualizarCantidad('${producto.identificadorUnico}', this.value)"></input>
        <input class="form-control" value="${producto.nombreDelServicio}"></input>
          <input class="form-control" type="number" value="${producto.precio}" onchange="actualizarPrecio('${producto.nombreDelServicio}', this.value)">
        </div>
      `);
    });
    modalBody.append("<hr>");
  }

  // Actualizar el contenido en el modal-footer con el nuevo total antes del IVA y el total después del IVA
  let iva = parseFloat($("#iva").val()) || 0;
  let montoIva = totalAntesIva * (iva / 100);
  let totalDespuesIva = totalAntesIva + montoIva;

  $("#totalAntesIva").text(`Total antes de IVA: $${totalAntesIva.toFixed(2)}`);
  $("#totalDespuesIva").text(
    `Total después de IVA: $${totalDespuesIva.toFixed(2)}`
  );
}


function actualizarPrecio(nombreServicio, nuevoPrecio) {
  let producto = productosSeleccionados.find(
    (p) => p.nombreDelServicio === nombreServicio
  );
  if (producto) {
    producto.precio = parseFloat(nuevoPrecio) || 0;
    actualizarModalBody();
  }
}

function actualizarCantidad(identificadorUnico, nuevaCantidad) {
  // Obtener el nombre del servicio y el índice del identificador único
  let [nombreServicio, index] = identificadorUnico.split("_");

  // Actualizar la cantidad en la lista de productos seleccionados usando el nombre del servicio e índice
  productosSeleccionados = productosSeleccionados.map((producto, i) => {
    if (producto.nombreDelServicio === nombreServicio && i == index) {
      return { ...producto, cantidad: parseInt(nuevaCantidad) || 1 };
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
      precio: 0,
      cantidad: 1, // Puedes establecer un valor predeterminado o dejarlo en 0
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

function agruparProductosPorCategoria() {
  let productosAgrupados = {};

  productosSeleccionados.forEach((producto) => {
    if (!productosAgrupados[producto.titulo]) {
      productosAgrupados[producto.titulo] = [];
    }
    productosAgrupados[producto.titulo].push({
      nombreDelServicio: producto.nombreDelServicio,
      precio: producto.precio,
      cantidad: producto.cantidad,
    });
  });

  return productosAgrupados;
}

function imprimirCotizacion() {
  let pdfContent = [];

  // Obtener la fecha actual con el formato DD/MM/YYYY
  let fechaActual = getFechaActual();

  // Colocar la fecha en la esquina superior derecha
  pdfContent.push({
    text: fechaActual,
    alignment: "right",
    margin: [0, 10, 20, 0], // Márgenes (arriba, derecha, abajo, izquierda)
  });

  // Encabezado de la cotización
  pdfContent.push({
    text: "MTZ SERVICIOS MAQUINARIA EN GRAL\nMADERO #1020 EL MORALETE COLIMA, COLIMA\nCOTIZACION DE SERVICIO",
    alignment: "center",
    margin: [0, 0, 0, 20], // Márgenes (arriba, derecha, abajo, izquierda)
  });

  // Encabezados de la tabla
  let tablaEncabezados = [
    { text: "CONCEPTO", bold: true, alignment: "left", margin: [20, 0, 0, 0] },
    { text: "PRECIO", bold: true, alignment: "right" },
  ];

  // Detalle de productos
  let productosAgrupados = generarDetalleProductos();
  let tablaProductos = [];

  for (let titulo in productosAgrupados) {
    // Agregar el título como una fila en la tabla
    tablaProductos.push([
      { text: titulo, style: "subheader", colSpan: 2, alignment: "left" },
      {},
    ]);

    // Iterar sobre los productos de este título y agregarlos como filas
    productosAgrupados[titulo].forEach((producto) => {
      tablaProductos.push([
        { text: producto.concepto, margin: [20, 0, 0, 0] }, // Concepto
        { text: "$" + producto.precio.toFixed(2), alignment: "right" }, // Precio
      ]);
    });
  }

  // Agregar los encabezados y la tabla al contenido del PDF
  pdfContent.push({
    table: {
      widths: ["*", "auto"], // Ancho de las columnas
      body: [
        tablaEncabezados, // Encabezados de la tabla
        ...tablaProductos, // Cuerpo de la tabla con los datos estructurados
      ],
    },
    layout: {
      // Estilos de la tabla
      hLineWidth: function (i, node) {
        return i === 0 || i === node.table.body.length ? 1 : 0; // Línea horizontal en el encabezado y el final de la tabla
      },
      vLineWidth: function (i, node) {
        return 0; // Sin líneas verticales
      },
      // Espaciado interior de las celdas
      paddingLeft: function (i, node) {
        return 5;
      },
      paddingRight: function (i, node) {
        return 5;
      },
      paddingTop: function (i, node) {
        return 5;
      },
      paddingBottom: function (i, node) {
        return 5;
      },
    },
  });

  // Totales e información adicional
  let totalAntesIva = getTotalAntesIva();
  let iva = 0.16; // 16%
  let montoIva = totalAntesIva * iva;
  let totalDespuesIva = totalAntesIva + montoIva;

  pdfContent.push({
    text: [
      {
        text: `SUBTOTAL: $${totalAntesIva.toFixed(2)}`,
        bold: true,
        alignment: "right",
      },
      "\n",
      {
        text: `IVA (16%): $${montoIva.toFixed(2)}`,
        bold: true,
        alignment: "right",
      },
      "\n",
      {
        text: `TOTAL: $${totalDespuesIva.toFixed(2)}`,
        bold: true,
        alignment: "right",
      },
    ],
    margin: [0, 20, 0, 20], // Márgenes (arriba, derecha, abajo, izquierda)
  });

  pdfContent.push({
    text: [
      "COTIZACIONES QUE EXCEDAN DE 48 HORAS DE AUTORIZACIÓN\n",
      "CAMBIAR DE PRECIO SOBRE REFACCIONES\n",
      "TELÉFONO DE CONTACTO PARA CUALQUIER ACLARACIÓN O DUDA\n",
      "3121385522 CON ATENCIÓN DE ALAN",
    ],
    alignment: "center",
  });

  // Crear el documento PDF
  let pdfDoc = {
    content: pdfContent,
  };

  // Generar el archivo PDF y descargarlo
  pdfMake.createPdf(pdfDoc).download("cotizacion.pdf");
}


function generarDetalleProductos() {
  let detalleAgrupado = {};

  // Agrupar los productos por título
  productosSeleccionados.forEach((producto) => {
    if (!detalleAgrupado[producto.titulo]) {
      detalleAgrupado[producto.titulo] = [];
    }
    detalleAgrupado[producto.titulo].push({
      concepto: producto.nombreDelServicio,
      precio: producto.precio,
    });
  });

  return detalleAgrupado;
}

function productosAgrupadosPorCategoria() {
  let productosAgrupados = {};

  productosSeleccionados.forEach((producto) => {
    if (!productosAgrupados[producto.titulo]) {
      productosAgrupados[producto.titulo] = [];
    }
    productosAgrupados[producto.titulo].push({
      nombreDelServicio: producto.nombreDelServicio,
      precio: producto.precio,
      cantidad: producto.cantidad,
    });
  });

  return productosAgrupados;
}

function getTotalAntesIva() {
  return productosSeleccionados.reduce(
    (total, producto) => total + producto.precio,
    0
  );
}

function getTotalDespuesIva() {
  let totalAntesIva = getTotalAntesIva();
  let iva = 0.16; // 16%
  return (totalAntesIva * (1 + iva)).toFixed(2);
}

function getFechaActual() {
  let fechaActual = new Date();
  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1;
  let anio = fechaActual.getFullYear();

  // Ajuste para que tenga siempre dos dígitos
  if (dia < 10) {
    dia = "0" + dia;
  }
  if (mes < 10) {
    mes = "0" + mes;
  }

  return dia + "/" + mes + "/" + anio;
}


$("#imprimirCotizacionBtn").click(function () {
  imprimirCotizacion();
});

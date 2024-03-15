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
    productosSeleccionados.push({ ...producto, precio: 0, cantidad: 1 });
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
    modalBody.append(`<div class="titulo-modal-wrapper">
    <h5>${titulo}</h5> <input class="form-control" type="text"> </input>
    </div>`);
    productosAgrupados[titulo].forEach((producto) => {
      modalBody.append(`
        <div class="partida-wrapper">
        <input class="form-control input-sm" value="${producto.cantidad}" type="number" onchange="actualizarCantidad('${producto.identificadorUnico}', this.value)"></input>
        <input class="form-control" value="${producto.nombreDelServicio}"></input>
          <!--<p>${producto.nombreDelServicio}</p>-->
          <input class="form-control" type="number" value="${producto.precio}" onchange="actualizarPrecio('${producto.identificadorUnico}', this.value)">
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
  let [nombreServicio, index] = identificadorUnico.split("_");

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
  // Crear un nuevo objeto jsPDF con orientación portrait
  let pdf = new jsPDF();

  // Agregar el contenido al PDF
  agregarContenidoPDF(pdf);

  // Obtener la fecha actual
  let fechaActual = getFechaActual();

  // Concatenar la fecha al nombre del archivo
  let nombreArchivo = `cotizacion_${fechaActual}.pdf`;

  // Descargar el PDF con el nombre concatenado
  pdf.save(nombreArchivo);
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

function agregarContenidoPDF(pdf) {
  // Agregar encabezado
  agregarEncabezadoPDF(pdf);

  // Obtener productos agrupados
  let productosAgrupados = productosAgrupadosPorCategoria();

  // Obtener posición y final de agregarDetalleProductosPDF
  let yPositionDetalleProductos = agregarDetalleProductosPDF(
    pdf,
    productosAgrupados
  );

  // Agregar totales e información adicional
  agregarTotalesPDF(pdf, yPositionDetalleProductos);
}

function agregarEncabezadoPDF(pdf) {
  pdf.setFontSize(14);
  pdf.text("MTZ SERVICIOS MAQUINARIA EN GRAL", 50, 15, { align: "center" });
  pdf.text("MADERO #1020 EL MORALETE COLIMA, COLIMA", 50, 25, {
    align: "center",
  });
  pdf.text("COTIZACION DE SERVICIO", 50, 35, { align: "center" });
  pdf.text(getFechaActual(), 50, 45, { align: "center" });
}

function agregarDetalleProductosPDF(pdf, productosAgrupados) {
  let yPosition = 60;
  let pageHeight =
    pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();

  // Encabezado de la tabla
  pdf.setFontSize(12);
  pdf.text("CONCEPTO", 30, yPosition);
  pdf.text("PRECIO", 150, yPosition);
  yPosition += 10;

  for (let categoria in productosAgrupados) {
    // Verificar si hay espacio suficiente para la categoría actual en la página actual
    if (yPosition + 10 > pageHeight) {
      // Agregar un salto de página
      pdf.addPage();
      yPosition = 20; // Reiniciar la posición en la nueva página
    }

    // Fila de categoría
    pdf.setFontSize(12);
    pdf.text(categoria, 30, yPosition, { fontStyle: "bold" });
    yPosition += 10;

    // Detalle de productos
    productosAgrupados[categoria].forEach((producto) => {
      // Verificar si hay espacio suficiente para el producto actual en la página actual
      if (yPosition + 10 > pageHeight) {
        // Agregar un salto de página
        pdf.addPage();
        yPosition = 20; // Reiniciar la posición en la nueva página
      }

      pdf.text(producto.nombreDelServicio, 55, yPosition);
      pdf.text(`${producto.precio.toFixed(2)}`, 150, yPosition);
      pdf.text(`${producto.cantidad.toFixed(0)}`, 45, yPosition);
      yPosition += 10;
    });

    yPosition += 10; // Espaciado adicional entre categorías
  }

  // Devolver la posición y final
  return yPosition;
}

function agregarTotalesPDF(pdf, yPositionDetalleProductos) {
  let totalAntesIva = getTotalAntesIva();
  let iva = 0.16; // 16%

  // Calcular el monto del IVA en base al subtotal
  let montoIva = totalAntesIva * iva;

  // Calcular el total después del IVA
  let totalDespuesIva = totalAntesIva + montoIva;

  // Posición y final de agregarDetalleProductosPDF
  let yPosition = yPositionDetalleProductos + 20;
  let pageHeight =
    pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();

  // Verificar si hay suficiente espacio para los totales en la página actual
  if (yPosition + 30 > pageHeight) {
    // Agregar un salto de página
    pdf.addPage();
    yPosition = 20; // Reiniciar la posición en la nueva página
  }

  // Convertir los valores numéricos a cadenas de texto antes de pasarlo a pdf.text()
  pdf.text(`SUBTOTAL: $${totalAntesIva.toFixed(2)}`, 30, yPosition);
  pdf.text(`IVA (16%): $${montoIva.toFixed(2)}`, 30, yPosition + 10);
  pdf.text(`TOTAL: $${totalDespuesIva.toFixed(2)}`, 30, yPosition + 20);

  // Incluir contenido adicional después del IVA con estilos en línea
  pdf.text(
    "COTIZACIONES QUE EXCEDAN DE 48 HORAS DE AUTORIZACIÓN",
    30,
    yPosition + 40,
    {
      fontSize: 16,
      underline: true,
    }
  );

  pdf.text("CAMBIAR DE PRECIO SOBRE REFACCIONES", 30, yPosition + 45, {
    fontSize: 16,
    underline: true,
  });

  pdf.text(
    "TELÉFONO DE CONTACTO PARA CUALQUIER ACLARACIÓN O DUDA",
    30,
    yPosition + 50,
    {
      fontSize: 16,
    }
  );

  pdf.text("3121385522 CON ATENCIÓN DE ALAN", 30, yPosition + 55, {
    fontSize: 16,
    textCenter: true,
  });
}

function getTotalAntesIva() {
  return productosSeleccionados.reduce(
    (total, producto) => total + producto.precio,
    0
  );
}

function getFechaActual() {
  let fechaActual = new Date();
  return `${fechaActual.getDate()}/${
    fechaActual.getMonth() + 1
  }/${fechaActual.getFullYear()}`;
}

$("#imprimirCotizacionBtn").click(function () {
  imprimirCotizacion();
});

function agregarPieDePagina(pdf, texto) {
  // Configuración de estilo para el pie de página
  pdf.setTextColor(100);
  pdf.setFontSize(10);

  // Obtener las dimensiones de la página
  let pageWidth =
    pdf.internal.pageSize.width || pdf.internal.pageSize.getWidth();
  let pageHeight =
    pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();

  // Agregar el texto del pie de página centrado en la parte inferior
  pdf.text(texto, pageWidth / 2, pageHeight - 10, { align: "center" });
}

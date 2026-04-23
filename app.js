const views = {
  dashboard: {
    title: "Dashboard Ejecutivo",
    description: "Resumen rápido para micro y pequeñas empresas.",
    kpis: [
      ["Ventas del día", "$4.250.000", "+12%"],
      ["Cuentas por cobrar", "$8.900.000", "27 facturas"],
      ["Inventario bajo", "14 items", "Revisar hoy"],
      ["Flujo de caja", "$2.100.000", "Positivo"],
    ],
    headers: ["Documento", "Cliente", "Total", "Estado"],
    rows: [
      ["FV-1021", "Mercado Luz", "$580.000", "Pendiente"],
      ["FV-1020", "Papelería Río", "$310.000", "Pagada"],
      ["FV-1019", "Café del Centro", "$220.000", "Pagada"],
    ],
    activity: [
      "Se registró una factura en tab_encabezado_factura_venta.",
      "Nuevo movimiento en tab_movimiento_inventario.",
      "Pago aplicado en tab_cxc con medio de pago transferencias.",
    ],
  },
  ventas: {
    title: "Módulo de Ventas y CxC",
    description: "Flujo basado en tab_encabezado_factura_venta, tab_factura_detalle_venta y tab_cxc.",
    kpis: [
      ["Facturas emitidas", "326", "Mes actual"],
      ["Ticket promedio", "$154.000", "+7%"],
      ["Mora cartera", "$1.200.000", "8 clientes"],
      ["Pedidos abiertos", "11", "tab_encabezado_pedido"],
    ],
    headers: ["Factura", "Fecha", "Vencimiento", "Saldo"],
    rows: [
      ["FV-1017", "2026-04-21", "2026-05-21", "$180.000"],
      ["FV-1018", "2026-04-22", "2026-05-22", "$95.000"],
      ["FV-1019", "2026-04-23", "2026-05-23", "$0"],
    ],
    activity: [
      "Recordatorio automático de cobro para cliente 9001.",
      "2 pedidos convertidos a factura.",
      "Actualización de límite de crédito en tab_clientes.",
    ],
  },
  compras: {
    title: "Módulo de Compras y CxP",
    description: "Flujo de abastecimiento con órdenes, factura compra y cuentas por pagar.",
    kpis: [
      ["Órdenes abiertas", "9", "tab_orden_compra"],
      ["Compras del mes", "$12.4M", "Con IVA"],
      ["CxP próximas", "$3.1M", "7 días"],
      ["Proveedores activos", "42", "tab_proveedores"],
    ],
    headers: ["OC", "Proveedor", "Total", "Entrega"],
    rows: [
      ["OC-221", "Insumos Alfa", "$900.000", "2026-04-24"],
      ["OC-222", "Empaques SAS", "$430.000", "2026-04-25"],
      ["OC-223", "Granos del Valle", "$1.200.000", "2026-04-27"],
    ],
    activity: [
      "Recepción parcial de orden OC-221.",
      "Factura de compra asociada en tab_encabezado_factura_compra.",
      "Programación de pago a proveedor para lunes.",
    ],
  },
  inventario: {
    title: "Inventario y Producción",
    description: "Control por ítems, lotes, stock, recetas y órdenes de producción.",
    kpis: [
      ["Items activos", "618", "tab_item"],
      ["Lotes por vencer", "6", "< 10 días"],
      ["Stock crítico", "23", "tab_item_stock"],
      ["OP en curso", "4", "tab_orden_produccion"],
    ],
    headers: ["SKU", "Descripción", "Stock", "Lote"],
    rows: [
      ["MP-001", "Harina integral 25kg", "12", "L-4802"],
      ["PT-103", "Pan tajado clásico", "78", "L-5210"],
      ["INS-044", "Bolsa empaque 1lb", "140", "L-8920"],
    ],
    activity: [
      "Ajuste de inventario por merma.",
      "Producción finalizada y registrada en tab_produccion_resultado.",
      "Actualización de receta en tab_item_recetas.",
    ],
  },
  crm: {
    title: "CRM Básico: Clientes y Proveedores",
    description: "Gestión de terceros, direcciones, contactos y segmentación comercial.",
    kpis: [
      ["Clientes activos", "384", "tab_clientes"],
      ["Proveedores estratégicos", "18", "A/B"],
      ["PQRS abiertas", "5", "tab_pqrs"],
      ["Nuevos terceros", "12", "últimos 30 días"],
    ],
    headers: ["Tercero", "Tipo", "Ciudad", "Estado"],
    rows: [
      ["901002221", "Cliente", "Bogotá", "Activo"],
      ["900345112", "Proveedor", "Medellín", "Activo"],
      ["1020304050", "Cliente", "Cali", "Inactivo"],
    ],
    activity: [
      "Se registró dirección secundaria para cliente 901002221.",
      "Respuesta de PQRS enviada en tab_pqrs_rta.",
      "Actualización de datos de contacto validada.",
    ],
  },
  contable: {
    title: "Contabilidad y Tesorería",
    description: "Comprobantes, documentos contables, PUC y conciliación por bancos.",
    kpis: [
      ["Comprobantes mes", "112", "tab_encabezado_comprobante"],
      ["Docs contables", "58", "tab_doc_contable"],
      ["Bancos activos", "6", "tab_bancos"],
      ["Cierre pendiente", "Abr 2026", "En proceso"],
    ],
    headers: ["Comprobante", "Cuenta PUC", "Débito", "Crédito"],
    rows: [
      ["CE-9901", "110505", "$1.000.000", "$0"],
      ["CE-9901", "413505", "$0", "$1.000.000"],
      ["CE-9902", "240805", "$0", "$190.000"],
    ],
    activity: [
      "Plantilla de asiento recurrente aplicada.",
      "Conciliación bancaria con tab_terceros_banco completa.",
      "Validación de documento para cierre mensual.",
    ],
  },
};

const titleEl = document.getElementById("view-title");
const descEl = document.getElementById("view-description");
const kpisEl = document.getElementById("kpis");
const tableCard = document.getElementById("table-card");
const activityCard = document.getElementById("activity-card");

function render(viewKey) {
  const data = views[viewKey];
  titleEl.textContent = data.title;
  descEl.textContent = data.description;

  kpisEl.innerHTML = data.kpis
    .map(
      ([label, value, trend]) => `
      <div class="kpi">
        <h3>${label}</h3>
        <div class="value">${value}</div>
        <div class="trend">${trend}</div>
      </div>
    `
    )
    .join("");

  tableCard.innerHTML = `
    <h3>Vista operativa</h3>
    <table>
      <thead>
        <tr>${data.headers.map((header) => `<th>${header}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${data.rows
          .map(
            (row) =>
              `<tr>${row
                .map((cell, index) =>
                  index === row.length - 1
                    ? `<td><span class="tag">${cell}</span></td>`
                    : `<td>${cell}</td>`
                )
                .join("")}</tr>`
          )
          .join("")}
      </tbody>
    </table>
  `;

  activityCard.innerHTML = `
    <h3>Actividad reciente</h3>
    <ul>
      ${data.activity.map((line) => `<li>${line}</li>`).join("")}
    </ul>
  `;
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-item")
      .forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    render(button.dataset.view);
  });
});

render("dashboard");

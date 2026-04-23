# Prototipo Frontend MicroERP (Orion)

Este repositorio ahora incluye un prototipo de interfaz frontend orientado a **micro y pequeñas empresas**, construido en HTML/CSS/JS puro y tomando como referencia el modelo de datos del archivo `db_pgsql`.

## Qué incluye

- Dashboard ejecutivo con KPIs.
- Navegación por módulos:
  - Ventas y CxC
  - Compras y CxP
  - Inventario y Producción
  - CRM (Clientes/Proveedores/PQRS)
  - Contabilidad y Tesorería
- Tabla operativa y panel de actividad por cada módulo.

## Archivos

- `index.html`: estructura principal del prototipo.
- `styles.css`: estilos base y diseño responsive.
- `app.js`: datos mock por módulo y render dinámico.

## Uso

1. Abre `index.html` directamente en el navegador.
2. Cambia entre módulos desde el menú lateral para revisar la propuesta funcional.

## Siguientes pasos sugeridos

1. Conectar cada vista con API backend (facturas, inventario, cartera, etc.).
2. Reemplazar datos mock por consultas reales.
3. Implementar autenticación por roles de `tab_usuarios`, `tab_roles_sistema` y `tab_usuarios_permisos`.
4. Agregar formularios de creación/edición para los flujos clave.

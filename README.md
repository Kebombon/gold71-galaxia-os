# Gold 71 Café · Galaxia OS

Sistema web de pedidos, cierres e inventario para Gold 71 Café Galaxia.

## Archivos principales

- `index.html`: estructura de la aplicación.
- `css/styles.css`: estilos visuales.
- `js/menu.js`: menú, categorías, precios locales y precios de apps.
- `js/app.js`: lógica de pedidos, cuentas, personal, errores, cierres, administración e inventario.
- `assets/`: logos e íconos.
- `manifest.json`: datos de instalación tipo app/PWA.

## Administración

Contraseña inicial: `7171`.

Desde Administración se puede acceder a:

- Historial de cierres.
- Inventario.

## Inventario

El inventario calcula automáticamente lo vendido según los pedidos correctos del día. Los pedidos marcados como error no descuentan inventario ni suman a ventas.

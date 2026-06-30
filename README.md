# Gold 71 Café · Galaxia OS — versión web organizada

Esta carpeta contiene la app separada en archivos para trabajarla mejor y poder subirla a GitHub Pages.

## Archivos principales

- `index.html`: estructura de la aplicación.
- `css/styles.css`: diseño visual.
- `js/menu.js`: productos, categorías, precios locales y precios de apps.
- `js/app.js`: lógica de pedidos, cuentas, personal, cierres e historial.
- `assets/`: logos e íconos.
- `manifest.json`: datos para instalación tipo app/PWA.

## Importante

Para abrirla desde un link fijo e instalarla mejor en Android, lo ideal es subir esta carpeta a GitHub Pages.

Si se abre como archivo local (`content://` o `file://`), algunos navegadores antiguos pueden bloquear archivos externos. Para uso local en la tablet, la versión de un solo `index.html` sigue siendo más compatible.

## Contraseña de historial de cierres

Contraseña inicial: `7171`


## v2.9
- Auditoría parcial de menú: Limonada local corregida a $42 y se agregó Limonada mineral $46.
- Productos ordenados alfabéticamente dentro de cada categoría.
- Se agregó "Error de pedido" para marcar comandas incorrectas sin borrarlas; no suman a ventas ni productos vendidos.
- Los errores quedan visibles en historial y cierres, con motivo y responsable.


## v3.0

Mejora el registro de errores: ahora se elige el responsable y el motivo con botones, pensado para tabletas lentas y uso rápido.

# Changelog

## v5.2
- Colores diferenciados en gráfica de Ventas por origen.
- Mesa ahora usa morado.
- Para llevar ahora usa rojo.
- Uber ahora usa verde oscuro.
- DiDi ahora usa naranja.
- Personal ahora usa azul.
- La leyenda de Ventas por origen muestra ticket promedio y puede tocarse para ver detalle.


## v5.1
- Agrega tercera sección en Administración: Gráficas.
- Agrega gráfica de barras para Top productos vendidos.
- Agrega gráfica de dona/listado para Ventas por origen.
- Agrega filtros Hoy, Semana, Mes y Todo.
- En Top productos permite cambiar entre cantidad vendida e ingreso generado.

# Changelog

## v5.0
- Reconstrucción estable desde el proyecto modular.
- Corrige el error que impedía cargar correctamente la sección de Administración / Inventario.
- Agrega Agua mineral ($32) en Mesa y Para llevar.
- Corrige la edición de pedidos dentro de cierres guardados.
- Al corregir un pedido cerrado, se recalculan ventas, productos vendidos e inventario del día.
- El inventario conserva la posición al usar botones + / -.
- Actualiza cache busting a ?v=5.0 para evitar que GitHub/Chrome carguen archivos viejos.

## v4.2
- Intenta corregir carga de archivos nuevos con versión ?v=4.2.
- Hace visible el botón “Corregir pedido cerrado”.

## v4.0
- Separación en módulos: config.js, menu.js, inventory.js y app.js.

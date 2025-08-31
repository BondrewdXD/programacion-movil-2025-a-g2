# Semana 6 - Parcial Primer Corte

## Resumen de la semana
Esta semana se llevó a cabo el parcial correspondiente al primer corte, en el cual se nos proporcionó una historia de usuario relacionada con una tienda de computadoras. El reto consistió en desarrollar el registro de computadores bajo ciertos criterios de aceptación.

Los criterios de aceptación son los siguientes:
1. **Creación de un nuevo computador**:
   - **Código**: Identificador único del computador.
   - **Serial**: Número de serie del computador.
   - **Línea de Producción**: Submarca correspondiente al fabricante.
   - **Descripción**: Detalles específicos sobre el computador.
   - **Estado**: Definición del estado del computador (Activo/Inactivo).
   - **Fabricante**: Asociación del computador con un fabricante registrado en la base de datos.

2. **Filtrar computadores**:
   - El sistema deberá permitir filtrar los computadores según su código, estado o fabricante.

3. **Edición de datos de un computador**:
   - El usuario podrá editar los datos de un computador previamente registrado.

4. **Listado de computadores**:
   - El sistema deberá mostrar un listado con la información básica de cada computador en la vista principal.

5. **Pantallas independientes para CRUD**:
   - Cada funcionalidad del CRUD (Crear, Leer, Actualizar) deberá contar con pantallas independientes.

## Tareas realizadas

- **Diseño de las pantallas necesarias**: Se crearon los layouts en Figma para las siguientes pantallas, conforme a los requisitos proporcionados:
  1. **Pantalla de Listado de Computadores**:
     - Muestra una lista con los computadores registrados, mostrando información básica: código, estado, número de serie y fabricante.
     - Contiene un botón "Agregar Computador" para registrar nuevos computadores.
     - Incluye un campo de búsqueda y filtros para localizar computadores por código, estado o fabricante.
     - Opción de editar computadores existentes.
  
  2. **Pantalla de Registro de Computador**:
     - Campos de entrada: Código, Serial, Línea de Producción, Descripción, Estado y Fabricante.
     - Se implementaron validaciones para los campos obligatorios, como Código, Serial y Fabricante.
     - Incluye un botón "Guardar" para registrar un computador.

  3. **Pantalla de Edición de Computador**:
     - Muestra los datos precargados del computador seleccionado.
     - Permite la modificación de cualquier campo editable.
     - Incluye un botón "Guardar Cambios" para actualizar la información.

  4. **Pantalla de Filtros**:
     - Permite realizar búsquedas avanzadas utilizando filtros como Código, Estado y Fabricante.
     - Incluye un botón "Aplicar Filtros" para refinar los resultados mostrados.

- **Esquema de colores**: Se utilizó el esquema de color **Rojo-Gris-Azul** para las pantallas, siguiendo el diseño del proyecto.

- **Actualización en el repositorio**:
  - Se editó la rama **feature/exam-c1** y se renombró a **feature/exam**.
  - Se crearon dos carpetas en el repositorio:
    1. **C1-A1: Alistamiento del Proyecto Móvil** (para el trabajo anterior).
    2. **Parcial Exam-C1** (para el parcial del primer corte).
  - Se subieron los cambios al repositorio y se adjuntó el enlace correspondiente.

## Entrega

1. **Enlace del repositorio Git**:
   [Enlace al repositorio Git](https://github.com/BondrewdXD/programacion-movil-2025-a-g2.git).

2. **Prototipo en Figma**:
   [Prototipo Figma - Registro de Computadores](https://www.figma.com/design/aB0QnY4DEv5w8RYY08LgUl/Parcial_1Corte?node-id=0-1&t=4GBosRU2lkeAYkQa-1).

3. **Documento Word con capturas de pantalla**:
   Se preparó un documento de Word con capturas de pantalla de las pantallas diseñadas en Figma.

## Posibles planes para la siguiente semana
- Continuar con la implementación de la lógica detrás de las pantallas diseñadas en Figma.
- Realizar pruebas de usabilidad sobre las pantallas para asegurar la correcta interacción del usuario.
- Subir los avances al repositorio y preparar la siguiente entrega para el siguiente parcial.

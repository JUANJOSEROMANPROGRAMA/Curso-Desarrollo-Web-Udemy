# Package.json

el package.json es un archivo fundamental en proyectos basados en node.js y se utiliza para almacenar metadatos relevantes sobre el proyecto. Este archivo se encuentra en la raiz del proyecto y cumple con varias funciones importantes.

## Funciones del package.json

* `Gestion de dependencias:` el package.json enumera todas las dependecias del proyecto , tanto las de produccion (dependencies) como las de de desarrollo (devDependencies). Esto permite que cualquiera que colne el proyecto pueda instalarlas facilmente con npm install.
* ***`Scripts:`*** Permite definir scripts personalizados bajo la clave scripts que se pueden ejecutar con npm run *<script-name.>*. Estos scripts pueden incluir comandos para iniciar el servidor, compilar el codigo,ejecutar pruebas, y mas. Esto proporciona una manera conveniente de automatizar tareas comunes del proyecto.



## crear el package.json

```
npm init

```

# Package.json

el package.json es un archivo fundamental en proyectos basados en node.js y se utiliza para almacenar metadatos relevantes sobre el proyecto. Este archivo se encuentra en la raiz del proyecto y cumple con varias funciones importantes.

## Funciones del package.json

* `Gestion de dependencias:` el package.json enumera todas las dependecias del proyecto , tanto las de produccion (dependencies) como las de de desarrollo (devDependencies). Esto permite que cualquiera que colne el proyecto pueda instalarlas facilmente con npm install.
* ***`Scripts:`*** Permite definir scripts personalizados bajo la clave scripts que se pueden ejecutar con npm run *<script-name.>*. Estos scripts pueden incluir comandos para iniciar el servidor, compilar el codigo,ejecutar pruebas, y mas. Esto proporciona una manera conveniente de automatizar tareas comunes del proyecto.

## crear el package.json

```
npm init

```

## Como instalar dependencias

Si se desea instalar las dependencias de SASS

```
npm install sass

```

si se desea instalar otras dependdencias es mejor buscar en la documentacion de NPM para ver y copiar el codigo adecuado

* al realizar esto se creara la carpeta `node_modules` (que no se debe subir a hosting ni github, lo ideal es tenerlo dentro del .gitignore) seguido de esto se modificara el archivo package.json


si las dependecnias no se necesitan exportar a servidores o hosting y unicamente se van a utilizar de manera local se debe usar este comando

```
 npm i --save-dev sass
```

# Challenge Greydive

Este es el repositorio del desafio presentado para Greydive de frontend con React.js

## Para ejecutar la aplicación: 
Se debe clonar el repositorio

```bash
cd existing_folder
git clone https://github.com/LeanMendez/greydive-challenge.git
```

A continuación instale las dependencias, si va a utilizar npm, o yarn como gestor de paquetes, elimine el archivo "pnpm-lock.yaml" y proceda a hacer la instalacion de las dependencias.

```bash
npm install
pnpm i
yarn
```

Para ejecutar la aplicación ejecute el comando:

```bash
npm run dev
pnpm dev
yarn dev
```

## Content

En la siguiente aplicacion de React encontraremos una Página Home, donde se presenta la lista de las pruebas hechas a las páginas web de diferentes empresas. Dicha lista se actualiza de forma dinámica según la data proporcionada desde un archivo .json. Cada elemento de esta lista es un hipervínculo que nos lleva hasta las diferentes rutas dinámicas creadas para cada test.

## Estructura de las Rutas

Las rutas estan estructuradas de forma que se utilice como parametro el nombre de la empresa como identificador para llevarnos a la página donde se encuentra el test de la empresa respectiva.

### Las posibles rutas de la aplicación son:

Ruta de home
```bash
/
```
Rutas de tests
```bash
/tests/:cliente
```


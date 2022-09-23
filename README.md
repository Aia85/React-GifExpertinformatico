# Primeros pasos
    - yarn create vite (para crear el proyecto)
    - En la carpeta src borramos todos menos el main.jsx
    - Creamos nuestro primer proyecto GifExpertApp.jsx y modificamos el main.
    - yarn 
    - yarn dev
# Enviarlo a producción de forma rápida
    - yarn build 
    - npm install -global http-server
    - Entramos en cd /dist y ponemos http-server -o
    - npm install -g live-server
# Enviarlo a producción con netlify
    - yarn build - genera la carpeta de distribución (dist)
    - https://www.netlify.com/ - aplicaciones que no tienen backend
    - En netlify/ sites / dejamos caer la carpeta de distribución.
    - Genera una url y ya tenemos nuestra distribución.
# Subimos a GitHub lo hacemos funcionar en GitPages
    Renombramos la carpeta dist como docs
    repositorio / settings / pages / main /docs
    Para que funcione en el index hay que poner las extensiones con ./ para que las encuentre
# Para hacer los test

Instalaciones:
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
Opcional: Si usamos Fetch API en el proyecto:
yarn add --dev whatwg-fetch
Actualizar los scripts del package.json
"scripts: {
  ...
  "test": "jest --watchAll"
Crear la configuración de babel babel.config.js
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
Opcional, pero eventualmente necesario, crear Jest config y setup:
jest.config.cjs

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
jest.setup.cjs

// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
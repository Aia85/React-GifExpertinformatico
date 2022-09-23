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

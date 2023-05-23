# setup

## npm commands

    - npm create vite@latest
    - npm install
    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p
    - npm install react-router-dom
    - npm i prop-types --save
    - npm install axios
    - npm i sweetalert2 sweetalert2-react-content @fortawesome/fontawesome-free
    - npm i  bootstrap

tailwind.config
** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
app.css
@tailwind base;
@tailwind components;
@tailwind utilities;

- create component folders
- enlazar las rutas a las páginas

# setup

## npm commands

    - npm create vite@latest
    - npm install
    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p

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

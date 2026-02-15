🚀 Challenge For IT – Task Manager (Full Stack)

Aplicación Full Stack tipo Administrador de Tareas desarrollada con React en el frontend y Node.js + Express en el backend.
Permite crear, listar y buscar tareas, con una arquitectura simple y escalable.

🧩 Tecnologías utilizadas
🔹 Frontend

React

Vite

Zustand (manejo de estado global)

Tailwind CSS (estilos)

Fetch API (consumo de backend)

🔹 Backend

Node.js

Express

TypeScript

Sequelize

SQLite

dotenv

nodemon

ts-node

Estructura del Proyecto
challenge-for-it/
├── backend/rest_api_node_ts_server
│   ├── src/
│   │   ├── config/
│   │   │   └── db.ts
        ├── models/
│   │   ├── server.ts
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── nodemon.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── store/          # Zustand
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/       # Fetch API
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md

Pasos para la instalación
git clone https://github.com/Juan-prog-2022/challenge-for-it
cd challenge-for-it

Instalar dependencias
cd backend
npm install

Variables de entorno
Crear backend/.env:

PORT=4000
DB_PATH=database.sqlite

Scripts disponibles
backend:
npm run dev       # Modo desarrollo
npm run build     # Compila TypeScript
npm start         # Ejecuta versión compilada

frontend:
npm run dev       # Modo desarrollo con Vite
npm run build     # Build de producción
npm run preview   # Preview del build

👤 Autor

Juan Quiroz
Desarrollador Full Stack





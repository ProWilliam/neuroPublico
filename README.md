# Nombre del Proyecto

Una breve descripción de tu proyecto y su propósito.

## Características

- API RESTful construida con NestJS.
- Almacenamiento de datos en MongoDB Atlas.
- Autenticación y autorización de usuarios (si aplica).
- Documentación de la API con Swagger.

## Tecnologías Usadas

- [NestJS](https://nestjs.com/) - Framework progresivo para construir aplicaciones de servidor eficientes y escalables en Node.js.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Servicio de base de datos como servicio (DBaaS) para MongoDB.
- [TypeScript](https://www.typescriptlang.org/) - Un superconjunto tipado de JavaScript que compila a JavaScript puro.
- [Mongoose](https://mongoosejs.com/) - Biblioteca para modelar objetos de MongoDB en Node.js.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
```bash
git clone https://github.com/ProWilliam/neuroPublico.git
cd neuroPublico
```

2. Navega a las carpetas correspondientes para el frontend y backend:

Frontend:
```bash
cd frontend
npm install
```

Backend:
```bash
cd ../backend
npm install
```

3. Instala las variables de entorno del frontend and Backend:

- Frontend:
  Crear archivo .env en la raíz de tu proyecto con la siguiente informacion.
```env
URL_BACKEND=tu_ip_backend_con_port
PATH_PRODUCT=product
```

- Backend:
  Crear archivo .env en la raíz de tu proyecto con la siguiente informacion.
```env
DB_URI=tu_uri_de_mongodb_atlas
```

4. Inicia el servidor:
```bash
npm run start
```

5. Inicia el frontend:
```bash
cd ../frontend
npm run dev
```

## Uso
Puedes usar una herramienta como Postman o Insomnia para probar la API. Aquí tienes algunos ejemplos de rutas que puedes probar:

- POST /product - Crea la lista de producto.
- GET /product - Obtiene la lista de producto.

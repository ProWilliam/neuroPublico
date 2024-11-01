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
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
```

2. Navega a las carpetas correspondientes para el frontend y backend:
```bash
cd frontend
npm install
cd ../backend
npm install
```

3. Instala las dependencias del frontend:
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
Puedes usar una herramienta como Postman para probar la API. Aquí tienes algunos ejemplos de rutas que puedes probar:

- POST /product - Obtiene la lista de personajes.
- GET /product - Obtiene la lista de personajes.

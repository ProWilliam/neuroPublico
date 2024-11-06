# Project Overview: Technical Assessment - 24-Hour Development

This technical assessment was completed within a 24-hour timeframe, utilizing NestJS, MongoDB Atlas, TypeScript, Mongoose, React, Vite, and CSS. The primary challenge was to develop an interface closely resembling the target project design and functionality.

Version v1.0.0 was delivered within the initial timeframe, marking a significant milestone. Following this release, further improvements and solutions have been implemented to refine the project and enhance its performance and user experience.


## Features

- RESTful API built with NestJS for efficient and scalable server-side operations.
- Data storage managed on MongoDB Atlas, providing a cloud-hosted, scalable database solution.
- Data modeling handled with Mongoose, simplifying MongoDB object management.
- TypeScript utilized throughout for static typing, enhancing code quality and maintainability.
- Frontend interface built with React, Vite, and TypeScript, ensuring fast, dynamic, and type-safe client-side interactions.
- Styling applied using CSS for custom, responsive user interface design.


## Technologies Used

- [NestJS](https://nestjs.com/) - A progressive framework for building efficient and scalable server-side applications in Node.js.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - A database as a service (DBaaS) platform for MongoDB, providing cloud-based database hosting.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript, enhancing code maintainability and readability.
- [Mongoose](https://mongoosejs.com/) - A library for MongoDB object modeling, providing a straightforward schema-based solution to model data in Node.js.
- [React](https://react.dev/) - A JavaScript library for building user interfaces, allowing the creation of interactive and dynamic front-end components.
- [Vite](https://vite.dev/) - A modern build tool that provides fast development and optimized builds, used here to enhance the development experience with React.


## Instalación

Follow these steps to install and run the project on your local machine:

1. Clone the repository:
   
```bash
git clone https://github.com/ProWilliam/neuroPublico.git
cd neuroPublico
```

2. Navigate to the corresponding folders for the frontend and backend:

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

3. Install the frontend and backend environment variables:

- Frontend:
  Create .env file in the root of your project with the following information.
```env
URL_BACKEND=tu_ip_backend_con_port
PATH_PRODUCT=product
```

- Backend:
  Create .env file in the root of your project with the following information.
```env
DB_URI=tu_uri_de_mongodb_atlas
```

4. Start the server:
```bash
npm run start
```

5. Start the frontend:
```bash
cd ../frontend
npm run dev
```

## Use
You can use a tool like Postman or Insomnia to test the API. Here are some examples of routes you can try:

- POST /product - Create the product list.
- GET /product - Gets the product list.

Sure, here's an updated README file for your MERN stack project without Heroku and Docker:

# EMPLOYEE DASHBOARD - MERN Stack

This is a full stack application built with the MERN (MongoDB, Express JS, React JS & Node JS) stack. It consists of a Rest API backend that allows you to manage employees, and a frontend web application that consumes this API.

## Technologies Used

- Express JS: Used to handle requests on the server-side.
- MongoDB: Used to store employee data.
- Mongoose: Used to interact with MongoDB, model data, and create schemas.
- React JS: Used to create the user interface for the frontend.
- Redux: Used for state management.
- Redux-Saga: Used to make calls to the Rest API.
- Styled Components: Used to style the application.

## Backend

The backend of this application is a Rest API that lets you manage employees. There is only one model for handling employee data, with the following fields:

- Name
- Date of birth
- Gender
- Salary

To run the backend, you will need to have MongoDB installed on your machine. Once you have MongoDB set up, you can start the server by running the following commands:

```
cd backend
npm install
nodemon index.js
```

The server will be running on `http://localhost:5000`. You can use a tool like Postman to test the API endpoints.

## Frontend

The frontend of this application is a web application that allows you to create, list, update, and delete employee entries. To run the frontend, you can run the following commands:

```
cd frontend
npm install
npm start
```

The frontend will be running on `http://localhost:3000`. You can interact with the application through the user interface.

# NodeJS-Project

A simple backend RESTful API application built with Node.js + Express that supports READ operations for products and CRUD operations (Create, Read, Update, Delete) for reviews. It uses a JSON file as a lightweight database, making it ideal for prototyping.

### Features

READ operations for Products
CRUD operations for Reviews associated with products
Data is stored in a local products.json file
RESTful API structure
Built with Express.js

### Requirements

Node.js v14+
Express

## Getting started

clone the repository
```
git clone https://github.com/kizzanaome/CS472-Final-Project.git
cd CS472-Final-Project
```

Install the dependencies
```
npm install
```

start the server
```
npm run dev
```

### API Endpoints

Products Endpoints: Read

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/products`     | Get all products     |
| GET    | `/api/products/:id` | Get a single product |


Reviews CRUD (linked to Products)

| Method | Endpoint                           | Description                   |
| ------ | ---------------------------------- | ----------------------------- |
| GET    | `/api/products/:productId/reviews` | Get all reviews for a product |
| POST   | `/api/products/:productId/reviews` | Add a review to a product     |
| PUT    | `/api/reviews/:reviewId`           | Update a review               |
| DELETE | `/api/reviews/:reviewId`           | Delete a review               |



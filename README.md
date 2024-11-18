# Jumbotail

# E-Commerce Shipping Charge Estimator

This is a simple backend API for estimating shipping charges in a B2B e-commerce marketplace. The application helps Kirana stores in India to calculate shipping charges based on product weight, transport mode, delivery speed, and the distance between the warehouse and customer.

## Project Overview

The **Shipping Charge Estimator** calculates the shipping charges for delivering products from a seller's warehouse to a customer's location. It includes features like:
![Screenshot 2024-11-18 170748](https://github.com/user-attachments/assets/18b51c8f-15e9-4fbd-a6c4-678d8a0495f0)

- Finding the nearest warehouse for a seller's product.
![Screenshot 2024-11-18 170915](https://github.com/user-attachments/assets/91a4f12c-c381-4d6a-b360-5ad68b78882f)

- Calculating shipping charges based on the distance and transport mode.
- Supporting different delivery speeds (Standard, Express).
- Handling multiple warehouses across India.
![Screenshot 2024-11-18 171024](https://github.com/user-attachments/assets/6cfc9d01-b7d5-43e8-9421-6dfd8b73b79c)

## Features
### 1. Get the Nearest Warehouse for a Seller
- **Endpoint:** `GET /api/v1/warehouse/nearest`
- **Description:** Given a seller and product, return the nearest warehouse where the seller can drop off the product.
- **Sample Request:**
  ```http
  GET /api/v1/warehouse/nearest?sellerId=123&productId=456

git clone https://github.com/sagarrathod7568/Jumbotail.git

cd backend
npm install
node app.js

cd frontend
npm install
npm run build


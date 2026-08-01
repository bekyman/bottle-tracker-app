# API Documentation

| Document Information | |
|----------------------|--------------------------------|
| Project | Bottle Tracker App |
| Version | 1.0 |
| Author | Bereket Amanuel Desta |
| Date | August 2026 |
| Status | Draft |

---

# Table of Contents

1. Introduction
2. API Standards
3. Authentication
4. Response Format
5. Error Handling
6. API Endpoints
7. Status Codes
8. API Versioning
9. Security

---

# 1. Introduction

The Bottle Tracker App exposes a RESTful API that enables communication between the React frontend and the Express backend.

The API follows REST principles and exchanges data in JSON format.

Base URL

```
http://localhost:5000/api/v1
```

Production

```
https://your-domain.com/api/v1
```

---

# 2. API Standards

## Request Format

All request bodies use JSON.

Example

```json
{
    "productName": "Coca-Cola 300ml",
    "quantity": 50
}
```

---

## Response Format

Successful responses

```json
{
    "success": true,
    "message": "Request completed successfully.",
    "data": {}
}
```

Error responses

```json
{
    "success": false,
    "message": "Product not found.",
    "errors": []
}
```

---

# 3. Authentication

Authentication uses JSON Web Tokens (JWT).

Example Header

```
Authorization: Bearer <access_token>
```

Protected endpoints require a valid JWT.

---

# 4. API Modules

The API is organized into the following modules:

- Authentication
- Users
- Customers
- Products
- Inventory
- Bottles
- Orders
- Bottle Returns
- Reports
- Activity Logs

---

# 5. Authentication Endpoints

## Login

POST

```
/auth/login
```

Request

```json
{
    "email": "admin@example.com",
    "password": "password123"
}
```

Response

```json
{
    "success": true,
    "token": "...",
    "user": {}
}
```

---

## Logout

POST

```
/auth/logout
```

---

## Refresh Token

POST

```
/auth/refresh
```

---

# 6. User Endpoints

## Get All Users

GET

```
/users
```

---

## Get User

GET

```
/users/:id
```

---

## Create User

POST

```
/users
```

---

## Update User

PUT

```
/users/:id
```

---

## Delete User

DELETE

```
/users/:id
```

---

# 7. Customer Endpoints

GET

```
/customers
```

POST

```
/customers
```

PUT

```
/customers/:id
```

DELETE

```
/customers/:id
```

---

# 8. Product Endpoints

GET

```
/products
```

GET

```
/products/:id
```

POST

```
/products
```

PUT

```
/products/:id
```

DELETE

```
/products/:id
```

---

# 9. Inventory Endpoints

GET

```
/inventory
```

POST

```
/inventory/receive
```

POST

```
/inventory/adjust
```

GET

```
/inventory/history
```

---

# 10. Bottle Endpoints

GET

```
/bottles
```

GET

```
/bottles/:id
```

POST

```
/bottles
```

PUT

```
/bottles/:id
```

DELETE

```
/bottles/:id
```

GET

```
/bottles/status/:status
```

---

# 11. Order Endpoints

GET

```
/orders
```

GET

```
/orders/:id
```

POST

```
/orders
```

PUT

```
/orders/:id
```

DELETE

```
/orders/:id
```

---

# 12. Bottle Return Endpoints

POST

```
/returns
```

GET

```
/returns
```

GET

```
/returns/:id
```

---

# 13. Report Endpoints

GET

```
/reports/dashboard
```

GET

```
/reports/inventory
```

GET

```
/reports/orders
```

GET

```
/reports/bottles
```

---

# 14. Activity Log Endpoints

GET

```
/activity
```

GET

```
/activity/:id
```

---

# 15. HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 500 | Internal Server Error |

---

# 16. Validation

The API validates:

- Required fields
- Data types
- Unique values
- Business rules
- Authentication
- Authorization

---

# 17. Security

The API implements:

- JWT Authentication
- Password Hashing (bcrypt)
- Input Validation
- Authorization Middleware
- CORS
- Rate Limiting (Future)
- Helmet Security Headers
- Request Logging

---

# 18. API Versioning

Current Version

```
v1
```

Example

```
/api/v1/products
```

Future versions

```
/api/v2/products
```

---

# Revision History

| Version | Date | Description |
|---------|------|-------------|
| 1.0 | August 2026 | Initial API Documentation |
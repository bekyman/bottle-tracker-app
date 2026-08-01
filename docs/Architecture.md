# System Architecture

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
2. Architectural Goals
3. High-Level Architecture
4. Technology Stack
5. Application Architecture
6. Frontend Architecture
7. Backend Architecture
8. Database Architecture
9. Authentication & Authorization
10. API Communication
11. Project Structure
12. Design Principles
13. Deployment Architecture
14. Future Scalability

---

# 1. Introduction

This document describes the overall architecture of the Bottle Tracker App. It defines how the system is organized, how components interact, and the technologies used to build a scalable and maintainable application.

---

# 2. Architectural Goals

The architecture is designed to achieve the following objectives:

- Scalability
- Maintainability
- Security
- Performance
- Modularity
- Reusability
- Simplicity

---

# 3. High-Level Architecture

```
                    Browser
                        │
                        ▼
              React + Vite Frontend
                        │
                HTTPS / REST API
                        │
                        ▼
               Express.js Backend
                        │
          ┌─────────────┴─────────────┐
          │                           │
      Authentication             Business Logic
          │                           │
          └─────────────┬─────────────┘
                        │
                        ▼
                    MongoDB
```

The frontend communicates with the backend using REST APIs over HTTP/HTTPS. The backend handles authentication, business logic, validation, and database access.

---

# 4. Technology Stack

## Frontend

- React
- Vite
- React Router
- Axios
- Tailwind CSS

## Backend

- Node.js
- Express.js
- JWT
- Bcrypt

## Database

- MongoDB
- Mongoose

## Development Tools

- Git
- GitHub
- VS Code
- Postman

---

# 5. Application Architecture

The application follows a client-server architecture.

### Client Responsibilities

- Render UI
- Validate forms
- Handle routing
- Consume REST APIs

### Server Responsibilities

- Authentication
- Authorization
- Business logic
- Database operations
- Error handling

---

# 6. Frontend Architecture

```
src/

assets/
components/
layouts/
pages/
hooks/
context/
services/
utils/
routes/
App.jsx
main.jsx
```

### Responsibilities

Assets
- Images
- Icons
- Fonts

Components
- Reusable UI components

Pages
- Complete application screens

Layouts
- Dashboard layout
- Authentication layout

Services
- API communication

Context
- Authentication
- Global state

Hooks
- Custom React hooks

Utils
- Helper functions

---

# 7. Backend Architecture

```
backend/

config/
controllers/
middleware/
models/
routes/
services/
utils/
validations/
server.js
```

### Responsibilities

Controllers
- Process requests

Routes
- API endpoints

Models
- Database schemas

Middleware
- Authentication
- Authorization
- Error handling

Services
- Business logic

Config
- Database connection
- Environment configuration

---

# 8. Database Architecture

Collections

- Users
- Products
- Bottles
- Orders
- Customers
- ActivityLogs

Relationships

User
↓
creates
↓
Order

Order
↓
contains
↓
Product

Product
↓
uses
↓
Bottle

Bottle
↓
tracked by
↓
Bottle Ledger

---

# 9. Authentication & Authorization

Authentication

- JWT Access Token
- Password Hashing using bcrypt
- Protected API routes

Authorization

Role-Based Access Control (RBAC)

Roles

- Administrator
- Inventory Officer
- Sales Officer
- Warehouse Staff
- Manager

---

# 10. API Communication

```
Frontend
     │
 Axios Request
     │
     ▼
Express Route
     │
Controller
     │
Service
     │
Model
     │
MongoDB
```

The response follows the reverse path back to the frontend.

---

# 11. Project Structure

```
bottle-tracker-app/

backend/
client/
docs/

README.md
.gitignore
```

---

# 12. Design Principles

The project follows these principles:

- Separation of Concerns
- DRY (Don't Repeat Yourself)
- SOLID (where applicable)
- Modular Design
- Reusable Components
- Clean Code
- RESTful API Design

---

# 13. Deployment Architecture

Development

React Dev Server
        │
Express Server
        │
MongoDB Local

Production

React Build
        │
Reverse Proxy (optional)
        │
Express API
        │
MongoDB Atlas

---

# 14. Future Scalability

The architecture is designed to support:

- Microservices (future)
- Docker containers
- CI/CD pipelines
- Cloud deployment
- Redis caching
- File storage services
- Mobile applications

---

## Revision History

| Version | Date | Description |
|---------|------|-------------|
| 1.0 | August 2026 | Initial Architecture Document |
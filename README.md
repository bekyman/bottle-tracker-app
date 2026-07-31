# 🍾 Bottle Tracker App

A full-stack MERN (MongoDB, Express.js, React, Node.js) web application for managing bottle inventory, product stock, customer orders, and bottle movement. The system helps businesses accurately track reusable bottles throughout their lifecycle while providing real-time inventory visibility and operational reporting.

---

## 📖 Table of Contents

- Project Overview
- Features
- Technology Stack
- System Architecture
- Project Structure
- Installation
- Running the Application
- Environment Variables
- API Overview
- Roadmap
- Documentation
- Contributing
- License

---

# Project Overview

Bottle Tracker App is designed to digitize bottle inventory management for beverage businesses. It replaces manual record keeping with a centralized system that tracks bottle movement from inventory through customer distribution and return.

The application supports role-based access, inventory monitoring, reporting, and secure authentication.

---

# Features

## Current Features

- User Authentication
- Role-Based Access Control
- Dashboard
- Product Management
- Bottle Inventory
- Bottle Ledger
- Customer Orders
- Inventory Reports
- User Management
- Responsive Interface

## Planned Features

- Barcode Scanning
- QR Code Tracking
- Mobile Support
- Notification System
- Analytics Dashboard
- Export Reports (PDF & Excel)

---

# Technology Stack

## Frontend

- React
- Vite
- React Router
- Axios
- Tailwind CSS

## Backend

- Node.js
- Express.js

## Database

- MongoDB

## Authentication

- JWT (JSON Web Token)

## Version Control

- Git
- GitHub

---

# System Architecture

```
React Frontend
        │
        ▼
Express REST API
        │
        ▼
MongoDB Database
```

---

# Project Structure

```
bottle-tracker-app/

├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── server.js
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── layouts/
│   │   └── App.jsx
│
├── docs/
│
├── README.md
└── LICENSE
```

---

# Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/bottle-tracker-app.git
```

---

## Backend

```bash
cd backend
npm install
```

Start the backend server:

```bash
npm run dev
```

---

## Frontend

```bash
cd client
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside the `backend` directory.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# Running the Application

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd client
npm run dev
```

---

# API Overview

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/login | User login |
| POST | /api/auth/register | Register user |
| GET | /api/products | Retrieve products |
| POST | /api/products | Add product |
| GET | /api/orders | Retrieve orders |
| POST | /api/orders | Create order |
| GET | /api/bottles | Bottle inventory |
| POST | /api/bottles | Update bottle movement |

---

# Project Roadmap

### Phase 1

- Project Planning
- Documentation
- System Design

### Phase 2

- Authentication
- Dashboard
- User Management

### Phase 3

- Products
- Orders
- Bottle Ledger

### Phase 4

- Reports
- Analytics
- Deployment

---

# Documentation

Project documentation is located in the `docs/` directory.

Planned documents include:

- Project Charter
- Product Requirements Document (PRD)
- Software Requirements Specification (SRS)
- System Architecture
- Database Design
- API Documentation
- User Stories
- Use Cases
- Testing Plan
- Deployment Guide

---

# Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---


---

## Author

Developed by **Bereket Amanuel Desta**

Bachelor of Science in Electrical and Computer Engineering

MERN Stack Developer
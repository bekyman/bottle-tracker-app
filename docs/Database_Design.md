# Database Design

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
2. Database Overview
3. Entity Relationship Diagram
4. Collections
5. Relationships
6. Indexing Strategy
7. Validation Rules
8. Audit Trail
9. Future Scalability

---

# 1. Introduction

The Bottle Tracker App uses MongoDB as its primary database.

The database is designed to support inventory management, bottle lifecycle tracking, customer orders, and operational reporting while remaining scalable for future enhancements.

---

# 2. Database Overview

The system consists of the following collections:

- Users
- Customers
- Products
- Bottles
- Orders
- OrderItems
- BottleAssignments
- BottleReturns
- InventoryTransactions
- ActivityLogs

---

# 3. Entity Relationship Diagram

```

Users
│
├──────────────┐
│              │
▼              ▼

Orders ActivityLogs
│
▼

OrderItems
│
▼

Products

Orders
│
▼

BottleAssignments
│
▼

Bottles
│
▼

BottleReturns

InventoryTransactions
│
▼

Products

```

---

# 4. Collections

## Users

Stores all system users.

Fields

- _id
- fullName
- email
- password
- role
- status
- createdAt
- updatedAt

---

## Customers

Stores customer information.

Fields

- _id
- customerName
- phone
- address
- balance
- status
- createdAt

---

## Products

Represents beverages sold by the business.

Fields

- _id
- productName
- brand
- bottleType
- unitPrice
- stockQuantity
- reorderLevel
- status

---

## Bottles

Represents every physical bottle.

Each bottle has its own unique identifier.

Fields

- _id
- bottleCode
- bottleType
- currentStatus
- currentLocation
- condition
- purchaseDate
- notes

---

## Orders

Stores customer orders.

Fields

- _id
- orderNumber
- customerId
- orderDate
- totalAmount
- paymentStatus
- orderStatus
- createdBy

---

## OrderItems

Stores beverages included in an order.

Fields

- _id
- orderId
- productId
- quantity
- unitPrice
- subtotal

---

## BottleAssignments

Stores bottles assigned to an order.

Fields

- _id
- orderId
- bottleId
- assignedDate
- returnedDate
- assignmentStatus

---

## BottleReturns

Stores every bottle return transaction.

Fields

- _id
- orderId
- bottleId
- returnDate
- condition
- receivedBy
- remarks

---

## InventoryTransactions

Stores every inventory movement.

Fields

- _id
- transactionType
- productId
- quantity
- reference
- createdBy
- transactionDate

---

## ActivityLogs

Stores audit logs.

Fields

- _id
- userId
- action
- module
- timestamp
- ipAddress

---

# 5. Relationships

User

1 → Many Orders

Customer

1 → Many Orders

Order

1 → Many OrderItems

Order

1 → Many BottleAssignments

Bottle

1 → Many BottleReturns

Product

1 → Many InventoryTransactions

---

# 6. Indexing Strategy

Indexes should be created on:

Users

- email

Customers

- customerName
- phone

Products

- productName

Bottles

- bottleCode
- currentStatus

Orders

- orderNumber
- orderDate

---

# 7. Validation Rules

Examples

Users

- Email must be unique.
- Password minimum 8 characters.

Products

- Price must be greater than zero.
- Quantity cannot be negative.

Bottles

- bottleCode must be unique.
- Status is required.

Orders

- Customer is required.
- At least one product must exist.

---

# 8. Audit Trail

The following activities will be logged:

- Login
- Logout
- Product Creation
- Product Update
- Order Creation
- Bottle Assignment
- Bottle Return
- User Creation
- User Update

---

# 9. Future Scalability

The database has been designed to support future features including:

- Multiple Warehouses
- Factory Operations
- QR Code Tracking
- Barcode Scanning
- Mobile Application
- Business Intelligence Reporting

---

## Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | August 2026 | Initial Database Design |
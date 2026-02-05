# SnackStack

A simple food ordering and order tracking feature built as a full-stack Next.js application. The goal of this project was to deliver a complete, working order flow with a clean architecture, clear API design, and pragmatic testing within a limited timeframe.

---

## Tech Stack

- **Next.js (App Router)** – Full-stack framework used for UI and API routes
- **TypeScript** – Strong typing across frontend, backend, and tests
- **Tailwind CSS** – Utility-first styling for fast and consistent UI development
- **Vitest** – Lightweight and fast testing framework
- **Zod** – Runtime validation for API input safety

---

## Features

- **Menu Browsing**
    - Displays a list of food items with name, description, price, and image
    - Menu data served via a REST API

- **Cart & Checkout**
    - Add/remove items from the cart
    - Update item quantities
    - Simple checkout form for delivery details

- **Order Placement**
    - Places an order via a REST API
    - Validates payloads before processing
    - Stores order data in an in-memory repository

- **Order Status Tracking**
    - Order lifecycle: `RECEIVED → PREPARING → OUT_FOR_DELIVERY → DELIVERED`
    - Status updates are simulated on the backend
    - The client polls the API to simulate real-time updates
    - Order status updates every 10 seconds — please wait a few moments to see the status change

- **REST APIs**
    - `GET /api/menu` – Retrieve menu items
    - `POST /api/orders` – Place an order
    - `GET /api/orders/:id` – Retrieve order status

- **Input Validation**
    - Zod schemas ensure invalid data never reaches business logic

- **Automated Tests**
    - Unit tests for API endpoints and critical logic
    - Minimal UI tests for key user interactions

---

## Architecture

- **Full-Stack Next.js**
    - Frontend and backend live in a single codebase
    - Eliminates CORS issues and simplifies deployment

- **Repository Pattern**
    - Orders are stored via an abstract repository
    - Current implementation uses an in-memory store
    - Designed to be easily replaced with a database later

- **API Layer**
    - Route handlers act as controllers
    - Business logic kept separate from request handling

- **Real-Time Simulation**
    - Backend simulates order status progression using timers
    - Frontend polls the API to reflect updates

---

## Testing Strategy

- **30/70 Rule**
    - Focus on testing what can break the system rather than exhaustive coverage

- **What Is Tested**
    - Order creation
    - Payload validation
    - Order retrieval
    - Order lifecycle behavior

- **What Is Intentionally Not Over-Tested**
    - Styling and layout
    - Static UI rendering
    - Non-critical interactions

This keeps the test suite fast, meaningful, and maintainable.

---

## Trade-offs & Future Improvements

- **Persistence**
    - Replace the in-memory store with a database (e.g., Postgres + Drizzle)

- **Real-Time Updates**
    - Use WebSockets or Server-Sent Events instead of polling

- **Authentication**
    - Add user accounts and order history

- **Scalability**
    - Background job processing for order updates
    - Better error handling and retry mechanisms

---

# Thank You

> Thank you for visiting and checking out my project.

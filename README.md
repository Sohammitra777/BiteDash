# 🍟 BiteDash🥤

A simple **food ordering & order tracking** feature built as a **full-stack Next.js** application 🚀
The goal of this project was to deliver a **complete, working order flow** with clean architecture 🧱, clear API design 🔌, and pragmatic testing 🧪 — all within a limited timeframe ⏱️.

---

## 🧰 Tech Stack

* **Next.js (App Router)** ⚡ – Full-stack framework for UI + API routes
* **TypeScript** 🧠 – Strong typing across frontend, backend, and tests
* **Tailwind CSS** 🎨 – Utility-first styling for fast, consistent UI
* **Vitest** 🧪 – Lightweight, fast testing framework
* **Zod** 🛡️ – Runtime validation to keep bad data out of business logic

---

## ✨ Features

### 📋 Menu Browsing

* Displays a list of food items with **name, description, price, and image** 🍕
* Menu data served via a **REST API** 🔗

### 🛒 Cart & Checkout

* Add items to the cart ➕
* Update item quantities 🔢
* Simple checkout form for delivery details 🏠

### 🧾 Order Placement

* Places an order via a **REST API** 📡
* Payloads are validated before processing ✅
* Stores order data in an **in-memory map** using an OOP-styled repository 🗂️

### 🚚 Order Status Tracking

* Order lifecycle:
  `RECEIVED → PREPARING → OUT_FOR_DELIVERY → DELIVERED`
* Status updates are **simulated on the backend** ⏳
* Client **polls the API** to mimic real-time updates 🔄
* Status updates every **10 seconds** — hang tight and watch it move 👀

### 🔌 REST APIs

* `GET /api/menu` – Retrieve menu items 🍔
* `POST /api/orders` – Place an order 🧾
* `GET /api/orders/:id` – Retrieve order status 📦

### 🛡️ Input Validation

* **Zod schemas** ensure invalid data never reaches business logic 🚫

### 🤖 Automated Tests

* Unit tests for APIs and critical logic 🧪
* Minimal UI tests for key user interactions 🖱️

---

## 🏗️ Architecture

### 🌐 Full-Stack Next.js

* Frontend and backend in a **single codebase**
* No CORS headaches 🤕, simpler deployment 🚀

### 🗃️ Repository Pattern

* Orders stored via an **abstract repository**
* Current implementation uses an **in-memory store**
* Easily swappable with a real database later 🧠💡

### 🧠 API Layer

* Route handlers act as controllers 🎮
* Business logic stays clean and separate ✂️

### ⏱️ Real-Time Simulation

* Backend simulates order progression using timers ⌛
* Frontend polls the API to reflect live updates 🔄

---

## 🧪 Testing Strategy

### 📊 30 / 70 Rule

* Focus on testing what can **break the system** instead of chasing 100% coverage 🎯

### ✅ What *Is* Tested

* Order creation 🧾
* Payload validation 🛡️
* Order retrieval 📦
* Order lifecycle behavior 🔁

### 🚫 What Is *Not* Over-Tested

* Styling and layout 🎨
* Static UI rendering 🧱
* Non-critical interactions 🙅

This keeps the test suite **fast ⚡, meaningful 🧠, and maintainable 🛠️**.

---

## 🙏 Thank You 💙

> Thank you for visiting and checking out my project — hope you enjoyed the snack run! 🍿😄

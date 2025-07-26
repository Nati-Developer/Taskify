
<h1 align="center">🚀 Taskify API</h1>
<p align="center"><b>Your Ultimate Task Management Solution</b></p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v18+-green" />
  <img src="https://img.shields.io/badge/Express.js-Fast%20Backend-blue" />
  <img src="https://img.shields.io/badge/MySQL-Database-orange" />
  <img src="https://img.shields.io/badge/JWT-Secure%20Auth-yellowgreen" />
  <img src="https://img.shields.io/badge/Postman-Tested-red" />
</p>

---

### 🎯 Overview

Welcome to **Taskify**, a robust and secure **RESTful API** for seamless task management, built with modern technologies:

* ⚡ **Node.js + Express.js** – Lightning-fast backend
* 🔐 **JWT Authentication** – Secure, token-based access
* 🔑 **Bcrypt** – Military-grade password hashing
* 🗄 **MySQL Database** – Reliable relational storage
* 🧪 **Postman Ready** – Fully tested for integration

> Perfect for developers, productivity tools, and full-stack project showcases!

---

## 📚 Table of Contents

* [🌟 Key Features](#-key-features)
* [🛠 Tech Stack](#-tech-stack)
* [📂 Project Structure](#-project-structure)
* [⚡ Quick Start](#-quick-start)
* [🔐 Authentication API](#-authentication-api)
* [📝 Tasks API](#-tasks-api)
* [🔍 Postman Testing Guide](#-postman-testing-guide)
* [🚦 Error Reference](#-error-reference)
* [🙌 Acknowledgments](#-acknowledgments)

---

## 🌟 Key Features

✅ **Secure Authentication System**
    🔐 JWT-based auth | 🔑 Password hashing

✅ **Complete CRUD**
    📌 Task creation, updating, deletion
    👤 User profile management

✅ **Optimized Architecture**
    🏗 MVC pattern | 🧩 Modular routes | ⚙ Central error handling

---

## 🛠 Tech Stack

| Layer      | Technology         | Purpose                       |
| ---------- | ------------------ | ----------------------------- |
| Runtime    | Node.js v18+       | JavaScript engine             |
| Framework  | Express.js         | Server-side app logic         |
| Database   | MySQL              | Relational storage            |
| ORM/Driver | Sequelize / mysql2 | DB communication              |
| Security   | JWT, bcrypt        | Auth + password hashing       |
| Dev Tools  | Nodemon            | Hot-reload during development |

---

## 📂 Project Structure

```
taskify-api/
├── controllers/         # Request handlers
├── routes/              # Route definitions
├── middleware/          # Auth checks, error handling
├── config/              # DB configuration
├── .env                 # Environment variables
├── app.js               # App entry point
└── package.json         # Project metadata
```

---

## ⚡ Quick Start

```bash
# 1. Clone repo
git clone https://github.com/Nati-Developer/Taskify.git
cd Taskify

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env
# → Edit .env with your credentials

# 4. Launch
npm run dev   # Dev mode
# OR
npm start     # Production
```

---

## 🔐 Authentication API

📍 **Base Path:** `/api/users`

| Method | Endpoint    | Auth | Description               |
| ------ | ----------- | ---- | ------------------------- |
| POST   | `/register` | ❌    | Register new user         |
| POST   | `/login`    | ❌    | Login & receive JWT token |
| GET    | `/profile`  | ✅    | Get current user profile  |
| PUT    | `/profile`  | ✅    | Update user profile       |
| DELETE | `/profile`  | ✅    | Delete account            |

---

## 📝 Tasks API

📍 **Base Path:** `/api/tasks`

| Method | Endpoint | Auth | Description    |
| ------ | -------- | ---- | -------------- |
| POST   | `/`      | ✅    | Create a task  |
| GET    | `/`      | ✅    | List all tasks |
| GET    | `/:id`   | ✅    | Get task by ID |
| PUT    | `/:id`   | ✅    | Update task    |
| DELETE | `/:id`   | ✅    | Delete task    |

---

## 🔍 Postman Testing Guide

### 🧩 Import Collection

1. Download: `Taskify.postman_collection.json`
2. Open Postman → **Import**

### ⚙ Setup Environment

| Variable     | Example                     |
| ------------ | --------------------------- |
| `base_url`   | `http://localhost:5000/api` |
| `auth_token` | Will be saved after login   |

### 🔁 Testing Workflow

```json
# Register
POST /users/register
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "secure123",
  "confirmPassword": "secure123"
}

# Login
POST /users/login
{
  "email": "test@example.com",
  "password": "secure123"
}

# Create Task
POST /tasks
Authorization: Bearer {{auth_token}}
{
  "title": "Complete API testing"
}
```

✅ The collection includes all necessary API tests!

---

## 🚦 Error Reference

| Code | Meaning      | What to Do                   |
| ---- | ------------ | ---------------------------- |
| 400  | Bad Request  | Check inputs/body parameters |
| 401  | Unauthorized | Use/refresh valid JWT token  |
| 404  | Not Found    | Verify ID or path            |
| 500  | Server Error | Debug logs or restart server |

---

## 🙌 Acknowledgments

Made with ❤️ by **Natnael Wosen**

* 🌐 [nati16.com](https://nati16.com)
* 💼 [LinkedIn](https://www.linkedin.com/in/Natnael-Wosen)
* 📧 [Email](mailto:natnaelwosen2003@gmail.com)
* 🐙 [GitHub](https://github.com/Nati-Developer)

---

Let me know if you want to turn this into a **GitHub Pages project site** or include a **live demo frontend**!

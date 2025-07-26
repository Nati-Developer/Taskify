
<h1 align="center">🚀 Taskify API</h1>
<p align="center"><strong>Enterprise-Ready Task Management Backend Solution</strong></p>

<p align="center">
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-v18+-green.svg" /></a>
  <a href="https://expressjs.com"><img src="https://img.shields.io/badge/Express.js-Backend-blue.svg" /></a>
  <a href="https://www.mysql.com/"><img src="https://img.shields.io/badge/MySQL-Relational DB-orange.svg" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Postman-Tested-red.svg" /></a>
</p>

---

 📌 Overview

Taskify is a secure, modular, and scalable RESTful API designed for task management applications. Whether you're building a productivity tool, a learning portfolio, or integrating task features into your SaaS platform, Taskify provides a clean and efficient backend foundation.

---

 ⚙️ Key Features

* 🔐 JWT Authentication – Robust, token-based access control
* 🔑 Bcrypt Security – Passwords encrypted using industry best practices
* 🧩 Modular Architecture – Clean MVC structure with layered separation
* 📋 Complete Task Lifecycle – Full CRUD operations on tasks and user data
* 🔄 Postman-Ready – Comes with a pre-built Postman collection for testing
* 🧪 Environment Configurable – Easily adaptable to development and production environments

---

 🛠 Tech Stack

| Category       | Technology         | Description                            |
| -------------- | ------------------ | -------------------------------------- |
| Runtime        | Node.js (v18+)     | Backend JavaScript engine              |
| Framework      | Express.js         | Web framework for routing & middleware |
| Database       | MySQL              | Structured relational storage          |
| ORM / Driver   | Sequelize / mysql2 | Simplified DB interaction & migrations |
| Security       | JWT, bcrypt        | Auth and password encryption           |
| Dev Experience | Nodemon            | Hot-reload for smooth development      |

---

 📁 Project Structure

```
taskify-api/
├── controllers/          # Business logic
│   ├── auth.controller.js
│   ├── task.controller.js
│   └── user.controller.js
├── routes/               # API route definitions
│   ├── auth.routes.js
│   ├── task.routes.js
│   └── user.routes.js
├── middleware/           # Custom middleware (e.g., auth)
│   └── auth.middleware.js
├── config/               # Configuration files (e.g., DB)
├── .env                  # Environment variable definitions
├── app.js                # Application entry point
└── package.json          # Project metadata & dependencies
```

---

 🚀 Getting Started

To get this project up and running locally:

 1. Clone the Repository

```bash
git clone https://github.com/Nati-Developer/Taskify.git
cd Taskify
```

 2. Install Dependencies

```bash
npm install
```

 3. Configure Environment Variables

Copy the example environment file and modify it:

```bash
cp .env.example .env
```

Update credentials like database URL, JWT secret, etc.

 4. Start the Application

```bash
npm run dev     # Development mode with hot reload
# OR
npm start       # Production mode
```

---

 🔐 Authentication API

Base Path: `/api/users`

| Method | Endpoint    | Auth Required | Description                 |
| ------ | ----------- | ------------- | --------------------------- |
| POST   | `/register` | ❌             | Register a new user         |
| POST   | `/login`    | ❌             | Login and receive JWT token |
| GET    | `/profile`  | ✅             | Fetch authenticated user    |
| PUT    | `/profile`  | ✅             | Update user details         |
| DELETE | `/profile`  | ✅             | Remove user account         |

---

 📝 Tasks API

Base Path: `/api/tasks`

| Method | Endpoint | Auth Required | Description             |
| ------ | -------- | ------------- | ----------------------- |
| POST   | `/`      | ✅             | Create a new task       |
| GET    | `/`      | ✅             | List all user tasks     |
| GET    | `/:id`   | ✅             | Get a specific task     |
| PUT    | `/:id`   | ✅             | Update an existing task |
| DELETE | `/:id`   | ✅             | Delete a task           |

---

 🧪 Postman Testing Guide

 🔁 Import Collection

* Download the collection: `Taskify.postman_collection.json`
* Open Postman → Import

 ⚙ Environment Setup

| Variable     | Example                     |
| ------------ | --------------------------- |
| `base_url`   | `http://localhost:5000/api` |
| `auth_token` | (Auto-filled after login)   |

 🧪 Sample Workflow

1. Register User
   POST `{{base_url}}/users/register`

   ```json
   {
     "name": "Test User",
     "email": "test@example.com",
     "password": "secure123",
     "confirmPassword": "secure123"
   }
   ```

2. Login User
   POST `{{base_url}}/users/login`

   ```json
   {
     "email": "test@example.com",
     "password": "secure123"
   }
   ```

3. Create a Task
   POST `{{base_url}}/tasks` with header:
   `Authorization: Bearer {{auth_token}}`

   ```json
   {
     "title": "Complete backend integration"
   }
   ```

---

🧾 Error Reference

| Code | Description        | Solution                            |
| ---- | ------------------ | ----------------------------------- |
| 400  | Bad Request        | Check required parameters or inputs |
| 401  | Unauthorized       | Token missing, invalid, or expired  |
| 404  | Resource Not Found | Verify ID/path correctness          |
| 500  | Server Error       | Check server logs and API logic     |

---

 🙌 Acknowledgments

Crafted with care by [Natnael Wosen](https://nati16.com)
Passionate Full-Stack Developer | API Architect | Open-Source Contributor

* 🌐 [Website](https://nati16.com)
* 💼 [LinkedIn](https://linkedin.com/in/Natnael-Wosen)
* 🐙 [GitHub](https://github.com/Nati-Developer)
* 📧 [Email](mailto:natnaelwosen2003@gmail.com)


 © 2025 — Taskify API by Natnael Wosen.

 🚀 Taskify API – Your Ultimate Task Management Solution

Welcome to **Taskify**, a robust and secure **RESTful API** for seamless task management, built with modern technologies:

- **Node.js + Express.js** - Blazing fast backend
- **JWT Authentication** - Enterprise-grade security
- **Bcrypt Hashing** - Military-grade password protection
- **MySQL Database** - Reliable data storage
- **Postman Tested** - Ready for integration

Ideal for developers, productivity apps, or showcasing your full-stack skills! 💻

---

## 📚 Table of Contents

1. [🌟 Key Features](#-key-features)
2. [🛠 Tech Stack](#-tech-stack)
3. [📂 Project Structure](#-project-structure)
4. [⚡ Quick Start](#-quick-start)
5. [🔐 Authentication API](#-authentication-api)
6. [📝 Tasks API](#-tasks-api)
7. [👤 User Profile API](#-user-profile-api)
8. [⚙ Environment Configuration](#-environment-configuration)
9. [🗃 Database Schema](#-database-schema)
10. [🔍 Postman Testing Guide](#-postman-testing-guide)
11. [🚦 Error Reference](#-error-reference)
12. [🙌 Acknowledgments](#-acknowledgments)

---

## 🌟 Key Features

- **Secure Authentication System**
  - JWT token-based authorization
  - Password hashing with bcrypt
- **Full CRUD Functionality**
  - Create, read, update, delete tasks
  - User profile management
- **Optimized Architecture**
  - MVC pattern implementation
  - Modular route handling
  - Centralized error management

---

## 🛠 Tech Stack

| Component       | Technology       | Purpose                          |
|-----------------|------------------|----------------------------------|
| Runtime         | Node.js v18+     | JavaScript execution environment |
| Framework       | Express.js       | Web application framework        |
| Database        | MySQL            | Relational data storage          |
| ORM/Driver      | Sequelize/mysql2 | Database interaction            |
| Security        | JWT, bcrypt      | Authentication & authorization  |
| Development     | Nodemon          | Auto-reload for development      |

---

## 📂 Project Structure

```
taskify-api/
├── controllers/          # Business logic handlers
│   ├── auth.controller.js
│   ├── task.controller.js
│   └── user.controller.js
├── routes/               # API endpoint definitions
│   ├── auth.routes.js
│   ├── task.routes.js
│   └── user.routes.js
├── middleware/           # Custom middleware
│   └── auth.middleware.js
├── config/               # Configuration files
│   └── db.config.js
├── .env                  # Environment variables
├── app.js                # Application entry point
└── package.json          # Dependency management
```

---

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nati-Developer/Taskify.git
   cd Taskify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

4. **Launch the application**
   ```bash
   npm run dev  # Development mode (with hot reload)
   # OR
   npm start    # Production mode
   ```

---

## 🔐 Authentication API

**Base Path:** `/api/users`

| Method | Endpoint    | Auth Required | Description                  |
|--------|-------------|---------------|------------------------------|
| POST   | `/register` | No            | Create new user account      |
| POST   | `/login`    | No            | Authenticate and get JWT     |
| GET    | `/profile`  | Yes           | Retrieve user profile        |
| PUT    | `/profile`  | Yes           | Update profile information   |
| DELETE | `/profile`  | Yes           | Delete user account          |

---

## 📝 Tasks API

**Base Path:** `/api/tasks`

| Method | Endpoint | Auth Required | Description                |
|--------|----------|---------------|----------------------------|
| POST   | `/`      | Yes           | Create new task            |
| GET    | `/`      | Yes           | List all user tasks        |
| GET    | `/:id`   | Yes           | Get specific task          |
| PUT    | `/:id`   | Yes           | Update task                |
| DELETE | `/:id`   | Yes           | Delete task                |

---

## 🔍 Postman Testing Guide

### Import Collection
1. Download the Postman collection: [Taskify.postman_collection.json](#)
2. Import into Postman via File → Import

### Environment Setup
1. Create new Postman environment
2. Add variables:
   - `base_url`: `http://localhost:5000/api`
   - `auth_token` (will be set automatically after login)

### Testing Workflow
1. **Register New User**
   - Method: POST
   - URL: `{{base_url}}/users/register`
   - Body (raw/JSON):
     ```json
     {
       "name": "Test User",
       "email": "test@example.com",
       "password": "secure123",
       "confirmPassword": "secure123"
     }
     ```

2. **Login & Get Token**
   - Method: POST
   - URL: `{{base_url}}/users/login`
   - Body:
     ```json
     {
       "email": "test@example.com",
       "password": "secure123"
     }
     ```
   - *Token will auto-save to environment*

3. **Create Task**
   - Method: POST
   - URL: `{{base_url}}/tasks`
   - Headers:
     ```
     Authorization: Bearer {{auth_token}}
     ```
   - Body:
     ```json
     {
       "title": "Complete API testing"
     }
     ```

4. **Test All Endpoints**
   - The collection includes pre-configured requests for all API operations
   - Simply select and "Send" each request in sequence

---

## 🚦 Error Reference

| Status Code | Error Type         | Resolution Steps                     |
|-------------|--------------------|--------------------------------------|
| 400         | Bad Request        | Verify request body/parameters       |
| 401         | Unauthorized       | Check/refresh JWT token              |
| 404         | Not Found          | Validate resource ID exists          |
| 500         | Server Error       | Check server logs and restart        |

---

## 🙌 Acknowledgments

Developed with passion by **Natnael Wosen**

- 🌍 [Portfolio](https://nati16.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/Natnael-Wosen)
- 📧 [Email](mailto:natnaelwosen2003@gmail.com)
- 🐙 [GitHub](https://github.com/Nati-Developer)



---
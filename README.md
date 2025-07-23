# ✅ Taskify API – Your Task Management Powerhouse

Welcome to **Taskify**, a slick and secure **RESTful API** for managing tasks, built with:

- 🚀 **Node.js + Express.js** for a rock-solid backend
- 🔐 **JWT** for secure authentication
- 🔒 **bcrypt** for bulletproof password hashing
- 🗃️ **MySQL** for storing all your data
- 

Perfect for task tracking, personal projects, or showing off your skills to potential employers! 💼

---

## 📚 Table of Contents

- [📌 What’s Taskify?](#-whats-taskify)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 How’s It Organized?](#-hows-it-organized)
- [⚙️ Setup Guide](#-setup-guide)
- [🔐 Auth Endpoints](#-auth-endpoints)
- [📝 Task Endpoints](#-task-endpoints)
- [📁 `.env` Example](#-env-example)
- [🗃️ Database Setup](#️-database-setup)
- [📬 Postman Testing](#-postman-testing)
- [🚨 Error Handling](#-error-handling)
- [🙌 Credits](#-credits)

---

## 📌 What’s Taskify?

**Taskify** is your go-to API for managing tasks with ease. It lets users:

- 🧑‍💻 Sign up, log in, and get a secure token
- 📋 Create, view, update, and delete tasks
- 👤 Manage their profile like a pro

Everything’s locked down with **JWT** for security, and passwords are safely hashed with **bcrypt**. Ready to scale for real-world apps!

---

## ✨ Features

- 🔒 Secure login with JWT tokens
- ✅ Create, read, update, and delete tasks
- 👤 Update or delete user profiles
- 🧼 Clean, modular code structure
- 🚨 Smart error handling for smooth UX
- 📊 Easy-to-use database schema

---

## 🛠️ Tech Stack

| Tool         | What It Does                   |
|--------------|--------------------------------|
| Node.js      | Powers the backend             |
| Express.js   | Handles API routes             |
| MySQL        | Stores users and tasks         |
| Sequelize/mysql2 | Talks to the database       |
| bcrypt       | Keeps passwords super safe     |
| JWT          | Locks down routes with tokens  |
| dotenv       | Manages environment variables  |
| Nodemon      | Auto-restarts during dev       |

---

## 📂 How’s It Organized?

Here’s the folder structure to keep things tidy:

```
Taskify/
├── controllers/          # Business logic
│   ├── authController.js # User auth stuff
│   └── taskController.js # Task CRUD stuff
│   └── userController.js # Task CRUD stuff
├── routes/               # API routes
│   ├── authRoutes.js     # Auth endpoints
│   └── taskRoutes.js     # Task endpoints
│   └── userRoutes.js     # Task endpoints
├── middleware/           # Custom middleware
│   └── authMiddleware.js # JWT protection
├── config/               # DB connection
│   └── db.js
├── .env                  # Environment variables
├── app.js                # Main app entry
└── package.json          # Dependencies & scripts
```

---

## ⚙️ Setup Guide

Get **Taskify** up and running in a few steps:

1. **Clone the repo**
```bash
git clone https://github.com/Nati-Developer/Taskify.git
cd Taskify
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up your `.env` file**
   Check out the [`.env` example](#-env-example) below and add your details.

4. **Start the server**
```bash
nodemon app.js  # For development with Nodemon
# or
node app.js  # For production
```

> **Pro tip**: Make sure your MySQL server is running!

---

## 🔐 Auth Endpoints

**Base URL:** `/api/users`

| Method | Endpoint       | Needs Token? | What It Does                  |
|--------|----------------|-------------|-------------------------------|
| POST   | `/register`    | ❌           | Sign up a new user            |
| POST   | `/login`       | ❌           | Log in and get a JWT token    |
| GET    | `/profile`     | ✅           | View user profile             |
| PUT    | `/profile`     | ✅           | Update name or email          |
| DELETE | `/profile`     | ✅           | Delete user and their tasks   |

> **For protected routes (✅)**, add this header:
```
Authorization: Bearer <your_jwt_token>
```

---

## 📝 Task Endpoints

**Base URL:** `/api/tasks`

| Method | Endpoint | Needs Token? | What It Does             |
|--------|----------|-------------|-------------------------|
| POST   | `/`      | ✅           | Create a new task       |
| GET    | `/`      | ✅           | List all user’s tasks   |
| PUT    | `/:id`   | ✅           | Update a task by ID     |
| DELETE | `/:id`   | ✅           | Delete a task by ID     |

---

## 📁 `.env` Example

Create a `.env` file in the root folder and add:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=taskify_db
JWT_SECRET=your_super_secret_key
```

> **Note**: Keep `JWT_SECRET` unique and secure!

---

## 🗃️ Database Setup

### `users` Table
| Column   | Type    | Description          |
|----------|---------|----------------------|
| id       | INT     | Unique user ID (PK)  |
| name     | VARCHAR | User’s full name     |
| email    | VARCHAR | Unique email address |
| password | VARCHAR | Hashed password      |

### `tasks` Table
| Column      | Type      | Description                |
|------------|-----------|----------------------------|
| id         | INT       | Unique task ID (PK)        |
| user_id    | INT       | Links to user (FK)         |
| title      | VARCHAR   | Task title                 |
| completed  | BOOLEAN   | Task status (true/false)   |
| created_at | TIMESTAMP | When task was created      |

> Run the SQL schema or use Sequelize migrations to set this up.

---

## 📬 Postman Testing

Test the API with the **Postman collection**!  
Download it here: [`taskify.postman_collection.json`](#) 

It includes all endpoints for:
- User registration/login
- Profile management
- Task CRUD operations


📋 Task Endpoints
Base Path: /tasks

Method	Endpoint	Protected	Description
POST	/	✅	Create a new task
GET	/	✅	Get all tasks for the user
Patch/Put	/:id	✅	Update a task
DELETE	/:id	✅	Delete a task
📦 Example JSON Requests
🔑 Register
POST /register
{
  "name": "NodeHamar",
  "email": "Nodehamer@gmail.com",
  "password": "qwerty",
  "confirmPassword": "qwerty"
}
🔑 Login
POST /login
{
  "email": "nodehamer@gmail.com",
  "password": "qwerty"
}
📌 Create Task
POST /tasks/
Authorization: Bearer <JWT_TOKEN>

{
  "name": "First Task"
}

📌 View Task By Id
get /tasks/1
Authorization: Bearer <JWT_TOKEN>


📌 View All Task
get /tasks
Authorization: Bearer <JWT_TOKEN>



📌 Update Task
Patch /tasks/1
Authorization: Bearer <JWT_TOKEN>

{
  "status": "Completed"
}


📌 Delete Task
Delete /tasks/1
Authorization: Bearer <JWT_TOKEN>

---

## 🚨 Error Handling

Errors are returned as JSON for easy frontend handling:

| Code | Meaning               | Why It Happens                     |
|------|-----------------------|------------------------------------|
| 400  | Bad Request           | Missing or invalid input           |
| 401  | Unauthorized          | Invalid or missing JWT token       |
| 404  | Not Found             | Resource (user/task) doesn’t exist |
| 500  | Server Error          | Something broke on the server      |

---

## 🙌 Credits

Built with 💪 by Natnael Wosen (Nati)
- GitHub: [Nati-Developer](https://github.com/Nati-Developer)  
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/Natnael-Wosen)  
- Email: [natnaelwosen2003@gmail.com](mailto:natnaelwosen2003@gmail.com)  

> Full-stack dev from 🇪🇹 Ethiopia, passionate about clean code and building cool stuff!

---

> *“Code is like art—turn your ideas into something real!”* – Nati

```

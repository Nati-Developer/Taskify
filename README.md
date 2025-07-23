# Taskify Backend

A simple, production-ready Task Manager API built with Node.js, Express.js, and MySQL2 (raw queries, no ORM). Supports user authentication, profile, and task management with pagination and search. Designed for deployment on Render or Railway.

## Features
- User signup/login with JWT authentication
- Secure password hashing (bcrypt)
- User profile endpoint
- Task CRUD (create, read, update, delete)
- Pagination and search for tasks
- Input validation and error handling
- CORS enabled for all origins
- Environment variable support

## Tech Stack
- Node.js, Express.js
- MySQL (MySQL2 driver, raw queries)
- JWT, bcrypt, dotenv, cors

## Setup Instructions

### 1. Prerequisites
- Node.js (v16+ recommended)
- MySQL server

### 2. Clone & Install
```sh
git clone <repo-url>
cd Taskify
npm install
```

### 3. Configure Environment
- Copy `.env.example` to `.env` and fill in your database and JWT settings:

```
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=taskify_db
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Set Up Database
- Create the database and tables:
```sh
mysql -u <user> -p < schema.sql
```

### 5. Run the Server
```sh
npm start
```

## API Documentation

### Auth
#### POST /signup
Register a new user.
- Body: `{ "name": "John", "email": "john@example.com", "password": "secret" }`
- Response: `{ "message": "User created", "userId": 1 }`
- Errors: 400 (invalid input), 409 (duplicate email)

#### POST /login
Login and receive JWT.
- Body: `{ "email": "john@example.com", "password": "secret" }`
- Response: `{ "token": "..." }`
- Errors: 400, 401

### User
#### GET /profile
Get authenticated user's profile.
- Header: `Authorization: Bearer <token>`
- Response: `{ "name": "John", "email": "john@example.com" }`
- Errors: 401, 404

### Tasks
#### POST /tasks
Create a new task.
- Header: `Authorization: Bearer <token>`
- Body: `{ "name": "Task Name" }`
- Response: `{ "id": 1, "name": "Task Name", "status": "pending" }`
- Errors: 400, 401

#### GET /tasks
Get tasks with pagination and search.
- Header: `Authorization: Bearer <token>`
- Query: `page`, `limit`, `search`
- Response:
```
{
  "tasks": [ { "id": 1, "name": "Task", "status": "pending", "createdAt": "..." } ],
  "total": 1,
  "page": 1,
  "limit": 10
}
```
- Errors: 401

#### PATCH /tasks/:id
Update task status.
- Header: `Authorization: Bearer <token>`
- Body: `{ "status": "completed" }`
- Response: `{ "message": "Task updated" }`
- Errors: 400, 401, 404

#### DELETE /tasks/:id
Delete a task.
- Header: `Authorization: Bearer <token>`
- Response: `{ "message": "Task deleted" }`
- Errors: 401, 404

## Error Responses
- 400: `{ "error": "message" }`
- 401: `{ "error": "message" }`
- 403: `{ "error": "message" }`
- 404: `{ "error": "message" }`
- 409: `{ "error": "message" }`

## Deployment (Render/Railway)
1. Create a MySQL instance and set environment variables in the dashboard.
2. Deploy the repo and set the build/start command: `npm install && npm start`
3. Ensure `.env` is configured with your DB and JWT settings.

---

**Note:** The API is ready for UI integration (signup/login, profile, task list with pagination/search). 
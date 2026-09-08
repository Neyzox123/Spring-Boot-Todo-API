# Todo List API — Spring Boot + React

A simple full-stack Todo application built to explore and compare **Spring Boot** with Node.js/Express as backend technologies. The backend exposes a REST API to manage todos, consumed by a React frontend.

## Tech Stack

**Backend**
- Java 21
- Spring Boot 3
- Spring Web (REST API)
- Maven

**Frontend**
- React
- Vite

## Features

- `GET /todos` — retrieve all todos
- `POST /todos` — add a new todo
- `DELETE /todos/{id}` — delete a todo by id
- Simple, clean UI to add and remove tasks in real time

## Project Structure

```
Todo-List-API/
├── backend/          # Spring Boot REST API
│   └── src/main/java/com/example/backend/
│       ├── BackendApplication.java
│       ├── Todo.java
│       └── TodoController.java
└── todo-frontend/    # React (Vite) client
    └── src/
        ├── App.jsx
        └── App.css
```

## Getting Started

### Prerequisites

- Java 21 (JDK)
- Node.js + npm
- Maven (or use the included `mvnw` wrapper)

### 1. Run the backend

```bash
cd backend
./mvnw spring-boot:run
```

The API will start on `http://localhost:8080`.

### 2. Run the frontend

```bash
cd todo-frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

> Note: update the `API_URL` constant in `src/App.jsx` if your backend runs on a different host/port (e.g. when using GitHub Codespaces).

## API Reference

| Method | Endpoint      | Description          |
|--------|---------------|------------------------|
| GET    | `/todos`      | List all todos         |
| POST   | `/todos`      | Create a new todo       |
| DELETE | `/todos/{id}` | Delete a todo by id     |

**Example — create a todo:**

```bash
curl -X POST http://localhost:8080/todos \
  -H "Content-Type: application/json" \
  -d '{"id":3,"title":"Learn Spring Boot","done":false}'
```

## Credits

Built by **Neyzox** as a learning project to compare Spring Boot with Node.js/Express, with guidance from Claude (Anthropic).

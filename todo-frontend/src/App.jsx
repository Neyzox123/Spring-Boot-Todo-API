import { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://bug-free-space-doodle-69w6779x6qp627x6-8080.app.github.dev/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    const res = await fetch(API_URL);
    const data = await res.json();
    setTodos(data);
    setLoading(false);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: Date.now(), title, done: false }),
    });
    setTitle("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="page">
      <div className="card">
        <header className="header">
          <h1>Todo List</h1>
          <span className="badge">Spring Boot + React</span>
        </header>

        <form className="add-form" onSubmit={addTodo}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
          />
          <button type="submit">Add</button>
        </form>

        {loading ? (
          <p className="empty">Loading...</p>
        ) : todos.length === 0 ? (
          <p className="empty">No todos yet. Add one above.</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className={todo.done ? "done" : ""}>
                <span className="dot" />
                <span className="title">{todo.title}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                  aria-label="Delete"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        <footer className="footer">
          {todos.length} task{todos.length !== 1 ? "s" : ""}
        </footer>
      </div>
    </div>
  );
}

export default App;

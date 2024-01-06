import { useState } from "react";
import "./todoList.css";
import Button from "../components/Button";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn JS" },
    { id: 3, title: "Learn CSS" },
  ]);

  const [title, setTitle] = useState("");

  const addTodo = () => {
    setTodos([...todos, { id: todos.length + 1, title }]);
    setTitle("");
  };

  return (
    <div className="todo-list">
      <h1 className="todo-title">Todo List</h1>
      <ul className="todo-items">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.title}
          </li>
        ))}
      </ul>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add Todo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="todo-input-field"
        />
        <Button press={() => addTodo()} disabled={!title}>
          Add Todo Do
        </Button>

        {/* <button
                    onClick={() => addTodo(title)}
                    className="todo-add-button"
                >
                    Add Todo
                </button> */}
      </div>
    </div>
  );
};

export default TodoList;

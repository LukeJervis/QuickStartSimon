import { useState } from "react";
import "./todoList.css";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Learn React" },
        { id: 2, title: "Learn JS" },
        { id: 3, title: "Learn CSS" }
    ]);

    const [title, setTitle] = useState("");

    const addTodo = (title) => {
        setTodos([...todos, { id: todos.length + 1, title }]);
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
                    className="todo-input-field"
                />
                <button
                    onClick={() => addTodo(title)}
                    className="todo-add-button"
                >
                    Add Todo
                </button>
            </div>
        </div>
    );
};

export default TodoList;

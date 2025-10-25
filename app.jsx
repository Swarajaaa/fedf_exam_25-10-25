import React, { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ 
      maxWidth: "400px", 
      margin: "50px auto", 
      padding: "20px", 
      background: "#f5f5f5", 
      borderRadius: "15px", 
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)" 
    }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>📝 To-Do List</h2>
      
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #aaa"
          }}
        />
        <button
          onClick={addTask}
          style={{
            marginLeft: "8px",
            padding: "8px 15px",
            border: "none",
            borderRadius: "8px",
            background: "#4CAF50",
            color: "white",
            cursor: "pointer"
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{
            background: "#fff",
            padding: "10px",
            marginBottom: "8px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            {todo}
            <button 
              onClick={() => deleteTask(index)} 
              style={{
                background: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "5px 10px",
                cursor: "pointer"
              }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

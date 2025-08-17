import React from "react";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          <span onClick={() => toggleTask(index)} style={{ cursor: "pointer" }}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(index)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;


import { useState } from "react";

function Todoapp() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  // Add Task
  const addTask = () => {
    if (task === "") return;
    setList([...list, task]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul>
        {list.map((item, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            {item}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todoapp;
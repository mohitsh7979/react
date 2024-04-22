import { useState } from "react";

function Todo() {
  let [task, setTask] = useState("");
  let [data, setData] = useState([]);

  function dataInput(event) {
    setTask(event.target.value);
  }

  function addTask() {
    setData([...data, task]);
    setTask("");
  }

  function updateTask(index) {
    setTask(data[index]);
  }

  function deleteTask(index) {
    setData(data.filter((_, i) => i !== index));
  }

  console.log(data)

  return (
    <>
      <div className="todo">
        <h1>Todo List</h1>
        <input type="text" onChange={dataInput} value={task} />
        <button onClick={addTask}>Add</button>

        <div className="content">
          {data.map((item, index) => (
            <div key={index}>
              <h1>{item}</h1>
              <button onClick={() => updateTask(index)}>Update</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todo;

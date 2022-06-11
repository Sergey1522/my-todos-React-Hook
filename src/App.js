// import React from "react";
import { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm.js";

function App(props) {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      let newTask = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newTask]);
    }
  };

  const removeTask = function (id) {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const hendleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };
  console.log(todos.length);
  return (
    <div className="App">
      <div>
        <h1>Список задач :{todos.length}</h1>
      </div>

      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={hendleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default App;

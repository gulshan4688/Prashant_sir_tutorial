import React from "react";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";

const todoItems=[
  {
    task:"go gym",
    time:new Date().toLocaleDateString()
  },
  {
    task:"go school",
    time:new Date().toLocaleDateString()
  },
  {
    task:"go home",
    time:"right now"
  }
]

const App = () => {
  return (
    <center className="todo-container">
      <h2>OUR TODO LIST</h2>
      <AddTask/>
      <ShowTask todo={todoItems} />
    </center>
  );
};

export default App;

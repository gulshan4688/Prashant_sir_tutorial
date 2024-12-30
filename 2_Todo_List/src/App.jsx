import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMess from "./components/WelcomeMess";

function App() {
  const oldtasks = [
    { task: "Complete React assignment", date: "2024-12-31" },
    { task: "Prepare for DSP exam", date: "2025-01-05" },
    { task: "Post project update on LinkedIn", date: "2025-01-10" },
  ];
  const [todoItems, setTodoItems] = useState(oldtasks);

  const handleNewItem = (newTask, newDate) => {
    // console.log(`newTask:${ newTask} and newDate:${ newDate}`);
    // pehle humlog console log kr rhe the lekin ab humlog set karenge
    const newTodoItems = [...todoItems, { task: newTask, date: newDate }];
    setTodoItems(newTodoItems);
  };
  const handleDelete = (taskTobeDeleted) => {
    // console.log(`task to be deleted is ${taskTobeDeleted}`);
    const newTodoItems=todoItems.filter(item=>item.task!==taskTobeDeleted)
    // ab dekhiye upar ka logic ye hai ki jo filter method hai wo ek filterd array return krke dete hai 
    // ab line upar jo filter use kiye hai usse wahi objects return hone jinke name delete krne wale se alag honge... smajhe 
    //  haaan delete hone wale se alag honge not equal to 
    // to hum yaha pe ye kehna chah rahe hai ki humko ek aisa array do jisme  "taskTobeDeleted" ka naam ka koi task na ho 
    // ab hamre pass new array hai newTodoItems isko kr dete hai set
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      {/* // AddTodo ki responsibilty hai task aur date add krna so whai newtask aur newDate lake dega 
      // yaha pe dhyan dene ki baat hai ki handleNewItem ko upar define kiya aur onNewItem ko pass kr diya as a prop name
      //  humne yaha par galti yeh ki thi ki handleNewItem upar define krke niche bracket ke andar onclick pass kr diya tha  */}
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMess />}
      <TodoItems todoItems={todoItems} onClickDelete={handleDelete} />
    </center>
  );
}

export default App;

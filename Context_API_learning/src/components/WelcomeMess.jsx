import React, { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";

const WelcomeMess = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && <h2>Enjoy Your Day</h2>
  );
};

export default WelcomeMess;

// const ContextObj = useContext(TodoItemsContext);
// const todoItemsFromContext=ContextObj.todoItems;

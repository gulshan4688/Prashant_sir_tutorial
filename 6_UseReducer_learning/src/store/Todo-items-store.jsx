import { Children, createContext, useReducer } from "react";

// we created a diffrent file for create context lekin issko humlog directly app ya koi bhi most parent file mei bana skte hai
// yaha humne teeno chize pass krdi hai joki .provider mei value pass kiye the taki auto complt ka option milte rahe
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
const newTodoItemsReducer = (currTodoItems, action) => {
  // now the action has dispatch with the type and payload so this func will collect both and will decide what to do further based on thsi action.type
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { task: action.payload.newTask, date: action.payload.newDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.task !== action.payload.newTask
    );
  }
  return newTodoItems;
};
const TodoItemsProvider = ({ children }) => {
  const [todoItems, dispatchNewTodoItems] = useReducer(newTodoItemsReducer, []);
  // useReducer 2 chije lega ek pure funtion aur ek initial value

  const addNewItem = (newTask, newDate) => {
    // hum log addNewItem mei aciton ko lenge aur uske niche dipatch kr denge uske liye hume ek object banana hoga
    const newItemOBJ = {
      // first one is type [which type of action or event  has been done]
      type: "NEW_ITEM",
      // and second one is what is change due to above action or event
      payload: {
        newTask,
        newDate,
      },
    };
    // aur yaha jo bhi humne object banaya usko dispatch bhi to karenge
    dispatchNewTodoItems(newItemOBJ);
    // setTodoItems((currentValue) => [
    //   ...currentValue,
    //   { task: newTask, date: newDate },
    // ]);
  };
  const deleteItem = (taskTobeDeleted) => {
    const newDeleteOBJ = {
      type: "DELETE_ITEM",
      payload: {
        newTask: taskTobeDeleted,
      },
    };
    dispatchNewTodoItems(newDeleteOBJ);
    // const newTodoItems = todoItems.filter(
    //   (item) => item.task !== taskTobeDeleted
    // );
    // setTodoItems(newTodoItems);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsProvider;

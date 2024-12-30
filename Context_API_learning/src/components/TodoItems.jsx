import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/Todo-items-store";

// fisrt it was taking prop form its parent now its taking prop form context which is defined for all
// const TodoItems = ({ todoItems,onClickDelete }) => {
// so now we removed because we dont want that
const TodoItems = () => {
  // const ContextObj = useContext(TodoItemsContext);
  // const todoItems=ContextObj.todoItems;
  const {todoItems,handleDelete}=useContext(TodoItemsContext);
  // console.log(todoItemsFromContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.date}
          todoName={item.task}
          onClickDelete={handleDelete}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;

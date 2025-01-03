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
  // useContext se jo bhi aya hai wo destructure kr liye hai
  // humse galti ye ho rhi thi naming hum purane wali rakh rhe the naming appko jo .provider ke value mei pass hua 
  // wahi naming rakhna hai 
  const {todoItems,deleteItem}=useContext(TodoItemsContext);
  // console.log(todoItemsFromContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.date}
          todoName={item.task}
          onClickDelete={deleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;

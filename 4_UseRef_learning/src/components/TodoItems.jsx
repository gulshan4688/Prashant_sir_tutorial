import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems,onClickDelete }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item,index) => (
        <TodoItem key = {index} todoDate={item.date} todoName={item.task}
          onClickDelete={onClickDelete} 
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
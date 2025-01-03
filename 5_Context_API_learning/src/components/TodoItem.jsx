import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            // end mei jaha pe sach mie kaam hoga jase delete ka kaam to delete btn mei hi hoga so
            // yaha pe {onClickDelete(todoName)} nhi dena hai niche dekh lo kaise dena hai
            onClick={() => deleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

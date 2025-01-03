import React, { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";

const AddTodo = () => {
  const { addNewItem } = useContext(TodoItemsContext);
  // const [task, setTask] = useState("");
  // const [date, setDate] = useState("");
  // pehle humlog state define krte the jisme hota ye tha ki ek key press pe vlaue update hota rehta tha lein useref mei form bayenge aur input tag se ref lenge aur handleSubmit butotn mei laga denge jisse jo submit hone pe update hoga
  // 1---------> yaha humne declare kiya
  const refTask = useRef();
  const refDate = useRef();
  // const handleTask = (event) => {
  //   // setTask(event.target.value);
  //   setTask(refTask);
  // };
  // const handleDate = (event) => {
  //   // setDate(event.target.value);
  //   setDate(refDate);
  // };
  const handleAddBtnClick = (event) => {
    // pehle ye button onNewItem mei add krta tha ab ye submit karega

    event.preventDefault();
    // 3-------------> yaha se uski value note ki
    const refTaskValue = refTask.current.value;
    const refDateValue = refDate.current.value;
    // console.log(`${refTaskValue} and ${refDateValue}`);
    // 4------------> fir usko jo method as a prop pass hua tha usme bhej denge
    addNewItem(refTaskValue, refDateValue);
    // pehle hum ye niche wala kr rhe the joki Reference ko pass krna kehte hai but hume to value pass krna hai isliye vlaue ko pehle store kiye fir usko pass kiye jaise ki upar
    // onNewItem(refTask, refDate);
    // jab humne value bhej di to dono task aur date ko empty kr do
    // refTask = '';
    // refDate = '';
    // setTask("");
    // setDate("");
  };
  return (
    <div>
      <div className="container text-center">
        {/* // we change this tag from div to form and added a onsubmit button which was previously defined for onclick in add  button */}
        <form className="row kg-row" onSubmit={handleAddBtnClick}>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              // onChange={handleTask}
              // value={task}
              // 2-------------> yaha humne usko tag mei lagaya
              ref={refTask}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              // onChange={handleDate}
              // value={date}
              // 2-------------> yaha humne usko tag mei lagaya
              ref={refDate}
            />
          </div>
          <div className="col-2">
            <button
              // this was previosly type button but now since it is form tag so here we changed this to type="submit"
              type="submit"
              className="btn btn-success kg-button"
              // yaha pehle humlog jo prop se hanlder laye the usko call kr rhe the
              // like this   onClick={() => onNewItem("a", "b")}
              // ab hum iski jagah koi aur  handleAddBtnClick layenge jo ki upar define hai aur usme usime onNewItem ko daal denge
              // we removed onclick and replaced its positon in form tag as onSubmit bcoz we were learning forms
              // onClick={handleAddBtnClick}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;

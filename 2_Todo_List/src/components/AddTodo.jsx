import React, { useRef, useState } from "react";

const AddTodo = ({ onNewItem }) => {
  // const [task, setTask] = useState("");
  // const [date, setDate] = useState("");
  const refTask = useRef('');
  const refDate = useRef('');
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
    console.log(`${refTask.current} and ${refDate.current}`);
    onNewItem(refTask, refDate);
    // jab humne value bhej di to dono task aur date ko empty kr do
    refTask = '';
    refDate = '';
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
              ref={refTask}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              // onChange={handleDate}
              // value={date}
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

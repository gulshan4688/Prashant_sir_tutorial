import React from "react";

const ShowTask = ({ todo }) => {
  return (
    <div>
      <div className="container text-center">
        {todo.map(({ task, time }, index) => (
          <div className="row" key={index}>
            <div className="col-4">
              <ul>
                <li>{task}</li>
              </ul>
            </div>
            <div className="col-4">{time}</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTask;

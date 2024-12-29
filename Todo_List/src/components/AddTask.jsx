import React, { useState } from "react";
import ShowTask from "./ShowTask";

const AddTask = () => {
  return (
    <div>
      <div className="container text-center m-3 ">
        <div className="row">
          <div className="col-4">
            <input type="text" placeholder="type here"/>
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;

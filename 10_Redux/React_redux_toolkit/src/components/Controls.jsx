import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, privacyActions } from "../store";
// ! now we have to dispatch the action by HOOK called called useDispatch() it will dispatch the actions to reducer and reducer will take action according to it

const Controls = () => {
  const inputElem = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
    console.log(privacyActions);
  };
  const handleAdd = () => {
    dispatch(counterActions.add({
      num: inputElem.current.value,
    }))
    inputElem.current.value = "";
  };
  const handleSubtract = () => {
    dispatch(counterActions.subtract({
      num: inputElem.current.value,
    }))
    inputElem.current.value = "";
  };
  return (
    <div>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            onClick={handleIncrement}
          >
            +1
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-light  px-4"
            onClick={handleDecrement}
          >
            -1
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-warning  px-4"
            onClick={handlePrivacyToggle}
          >
            Privacy Toggle
          </button>
        </div>
      </div>
      <div className="col-lg-6 mx-auto my-3">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <input
            type="number"
            placeholder="Enter the number"
            className="number-input"
            ref={inputElem}
          />
          <button
            type="button"
            className="btn btn-success btn-lg px-4 gap-10 control-gap"
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg px-4 gap-10 control-gap"
            onClick={handleSubtract}
          >
            Subtract
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;

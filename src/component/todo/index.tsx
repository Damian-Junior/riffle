import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/action";
import "../../styles/global.scss";
import { AppState } from "../../type";
const Todo = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();
  const task = useSelector((state: AppState) => state.task);
  console.log("text::::::::", task, add(input));
  return (
    <div className="cont">
    <div className="add">
        <input
          type="text"
          value={input}
          placeholder="your task"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <button
          type="button"
          onClick={() => {
            dispatch(add(input));
            console.log("dispatch::::", input);
          }}
        >
          Add
        </button>
      </div>
      <div className="tCont">
        <div className="tsk"> {task ? task : "Nothing to show here"}</div>
        <button type="button">Delete</button>
      </div>
    </div>
  );
};
export default Todo;

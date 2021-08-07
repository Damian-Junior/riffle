import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, } from "../../redux/action";
import "../../styles/global.scss";
import { Action, AppState } from "../../types";
import { Dispatch } from "redux";
const Todo = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch<Dispatch<Action>>();
  const tasks = useSelector((state: Array<AppState>) => state);
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
            console.log(tasks);
          }}
        >
          Add
        </button>
      </div>

      {tasks.map((task, key: number) => {
        return (
          <div key={key} className="t-cont">
            <div>{task.task ? task.task : "No task to add here"}</div>
            <button >Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default Todo;

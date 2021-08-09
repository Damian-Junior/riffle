import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteTask } from "../../redux/action";
import "../../styles/global.scss";
import { Action, AppState } from "../../types";
import { Dispatch } from "redux";
import useLocalStorage from "../../hooks/useLocalStorge";

const Todo = () => {
  const [input, setInput] = useState<string>("");
  const [name, setName] = useLocalStorage("Axtion", "Delete");
  const dispatch = useDispatch<Dispatch<Action>>();
  const tasks = useSelector((state: Array<AppState>) => state);
  const idGen = (): number => Math.floor(Math.random() * 1000);
  return (
    <div className="cont" data-testid="div">
      <div className="add" data-testid="div">
        <input
        data-testid = 'input'
          type="text"
          value={input}
          placeholder="your task"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <button
          data-testid="add"
          type="button"
          onClick={() => {
            dispatch(add(input, idGen()));
            console.log(tasks);
          }}
        >
          Add
        </button>
      </div>

      {tasks.map((task, key: number) => {
        return (
          <div key={key} className="t-cont" data-testid="div">
            <div data-testid = 'input_task'>{task.task ? task.task : "No task to add here"}</div>
            <button
              onClick={() => dispatch(deleteTask(task._id))}
              data-testid="delete"
            >
              {name}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Todo;

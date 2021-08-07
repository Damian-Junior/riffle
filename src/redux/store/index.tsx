import { createStore } from "redux";
import taskReducer from "../reducer/index";

export const store = createStore(taskReducer);

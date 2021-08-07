import { Action, AppState, ActionTypes } from "../../types";

const defaultState: Array<AppState> = [{ task: "", _id: 0 }];

const taskReducer = (state: Array<AppState> = defaultState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      console.log(state);
      return [...state, { task: action.payload, _id: action._id }];
    case ActionTypes.DELETE:
      return state.filter((state) => state._id !== action._id);
    default:
      return state;
  }
  // eslint-disable-next-line no-unreachable
};
export default taskReducer;

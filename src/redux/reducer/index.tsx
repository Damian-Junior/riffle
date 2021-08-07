import { Action , AppState, ActionTypes} from "../../types";


const defaultState: Array<AppState> = [{ task:''}];

const taskReducer = (state:  Array<AppState> = defaultState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD:
        console.log(state);
      return [...state,  {task: action.payload }];
    // case ActionTypes.DELETE:
    //   return {...state};
    default:
      return state;
  }
  // eslint-disable-next-line no-unreachable
  
};
export default taskReducer;

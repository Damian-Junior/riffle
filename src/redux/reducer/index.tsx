import { Action , AppState} from "../../type";


const defaultState: AppState = { task: "none" };

const taskReducer = (state: AppState = defaultState, action: Action) => {
  switch (action.type) {
    case "Add":
        console.log(action.payload, 'reducer:::::');
      return {...state,  task: 'it has worked' };
    // case "DELETE":
    //   return {...state};
    default:
      return state;
  }
  // eslint-disable-next-line no-unreachable
  
};
export default taskReducer;

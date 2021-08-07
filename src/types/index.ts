export type AddActionType = {
  type: ActionTypes.ADD;
  payload: string;
  _id: number;
};
export type DeleteActionType = {
  type: ActionTypes.DELETE;
  _id: number;
};
export interface AppState {
  task: string,
  _id: number
}
export type Action = AddActionType | DeleteActionType;

export enum ActionTypes {
  ADD = "ADD",
  DELETE = "DELETE",
}

import { Action, ActionTypes } from "../../../types"

export let add = (input: string, _id: number): Action => ({
  type: ActionTypes.ADD,
  payload: input,
  _id,
});

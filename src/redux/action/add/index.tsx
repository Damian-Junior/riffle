import { Action, ActionTypes } from "../../../types"

export let add = (input: string): Action => ({
  type: ActionTypes.ADD,
  payload: input,
});

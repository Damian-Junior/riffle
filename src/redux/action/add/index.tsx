import { Action } from "../../../type";

export let add = (input: string) => ({
  type: "ADD",
  payload: input,
});

import taskReducer, { defaultState } from "./index";
import { Action, ActionTypes } from "../../types";

describe("Reducer: TaskReducer", () => {
  let mockAction: Action;

  it("Should return the right state on Task Addition set up", () => {
    mockAction = {
      type: ActionTypes.ADD,
      payload: "coming to my place of It",
      _id: 2,
    };
    expect(taskReducer(defaultState, mockAction)).toEqual([
      ...defaultState,
      { task: mockAction.payload, _id: mockAction._id },
    ]);
  });

  it("Should return the right state on Deleting a task", () => {
    mockAction = {
      type: ActionTypes.DELETE,
      _id: 1,
    };
    expect(taskReducer(defaultState, mockAction)).toEqual([...defaultState]);
  });
});

import { deleteTask } from "./index";
import { ActionTypes } from "../../../types/index";

describe("Add Actions", () => {
  it("should not create an add action when the wrong type is passed", () => {
    const addAction = {
      _id: 1,
    };

    const { _id } = addAction;

    const expectedAction = {
      type: "Fake Action",
      _id,
    };
    expect(deleteTask(_id)).not.toEqual(expectedAction);
  });

  it("should create an action to add Todo", () => {
    const addAction = {
      _id: 1,
    };

    const { _id } = addAction;

    const expectedAction = {
      type: ActionTypes.DELETE,
      _id,
    };
    expect(deleteTask(_id)).toEqual(expectedAction);
  });
});

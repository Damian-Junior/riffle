import { add } from "./index";
import { ActionTypes } from "../../../types/index";

describe("Add Actions", () => {
  it("should not create an add action when the wrong type is passed", () => {
    const addAction = {
      payload: "wash my cloth",
      _id: 1,
    };

    const { payload, _id } = addAction;

    const expectedAction = {
      type: "Fake Action",
      payload,
      _id,
    };
    expect(add(payload, _id)).not.toEqual(expectedAction);
  });

  it("should create an action to add Todo", () => {
    const addAction = {
      payload: "wash my cloth",
      _id: 1,
    };

    const { payload, _id } = addAction;

    const expectedAction = {
      type: ActionTypes.ADD,
      payload,
      _id,
    };
    expect(add(payload, _id)).toEqual(expectedAction);
  });
});

import React from "react";
import Todo from "./index";
import { Provider } from "react-redux";
import { cleanup, screen, render, fireEvent } from "@testing-library/react";
import { store } from "../../redux/store";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/action";
import * as redux from "react-redux";

describe("Todo Componet", () => {
  afterEach(cleanup);
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  });
  it("should render without crashing", () => {
    const div: HTMLDivElement = document.createElement("div");

    ReactDOM.render(
      <Provider store={store}>
        <Todo />
      </Provider>,
      div
    );
  });
  it("should render div element", () => {
    expect(screen.getAllByTestId("div")).toHaveLength(3);
  });

  it("should rener the add button", () => {
    expect(screen.getByTestId("add")).toHaveTextContent("Add");
  });

  xit("should not fire dipatch if the wrong function was passed when then buttin is clicked", () => {
    const onInitialValues = jest.fn();
    // create mocked useDispatch
    //const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    fireEvent.click(screen.getByTestId("add"));
    //useDispatchMock.mockReturnValue(onInitialValues);
    expect(onInitialValues).not.toHaveBeenCalled();
  });

  it("should call the add action when the add button os clicked", () => {
    const addAction = {
      payload: "wash my cloth",
      _id: 1,
    };

    const { payload, _id } = addAction;

    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockedDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockedDispatch);
    fireEvent.click(screen.getByTestId("add"));
    expect(useDispatchSpy).toHaveBeenCalled();
    useDispatchSpy.mockClear();
  });
});

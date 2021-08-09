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
  it("should render one input elment", () => {
    expect(screen.getByTestId("input")).toBeTruthy();
  });
  it("should contain a div with testid input_task", () => {
    expect(screen.getByTestId("input_task")).toBeInTheDocument();
  });
  it("it should the text No task to add here on page load ", () => {
    expect(screen.getByTestId("input_task")).toHaveTextContent(
      "No task to add here"
    );
  });
  it("should render the text from the input onChange", () => {
    fireEvent.change(screen.getByTestId("input"), {
      target: { value: "watch all my cloth" },
    });
    fireEvent.click(screen.getByTestId("add"));
    expect(screen.getAllByTestId("input_task")[1]).toHaveTextContent(
      "watch all my cloth"
    );
  });
  it("should render the add button", () => {
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

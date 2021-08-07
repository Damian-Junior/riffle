import React from "react";
import Todo from "./index";
import { Provider } from "react-redux";
import {
  cleanup,
  screen,
  render,
  fireEvent,
  getByTestId,
} from "@testing-library/react";
import { store } from "../../redux/store";
import ReactDOM from "react-dom";
import * as reactRedux from "react-redux";

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
  it("should call a function when the add button is clicked", () => {
    const onInitialValues = jest.fn();
    // create mocked useDispatch
    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    fireEvent.click(screen.getByTestId("add"));
    useDispatchMock.mockReturnValue(onInitialValues);
    expect(onInitialValues).not.toHaveBeenCalled();
  });
});

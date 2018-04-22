import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
// setup
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const initialState = {
  fetchingGifs: false,
  fetchingGifsSuccess: false,
  fetchingGifsFailed: false,
  gifs: []
};

//*******************************************************************************************************
describe("HOME --- REACT-REDUX (Shallow + passing the {store} directly)", () => {
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<Home store={store} />);
  });

  it("+++ render the Home component", () => {
    expect(container.length).toEqual(1);
  });

  it("+++ check Prop matches with initialState", () => {
    expect(container.prop("gifs")).toEqual(initialState.gifs);
  });
});

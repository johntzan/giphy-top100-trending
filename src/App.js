import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./components/Home";
import "react-gif-player/dist/gifplayer.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;

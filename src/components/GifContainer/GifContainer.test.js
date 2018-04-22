import React from "react";
import ReactDOM from "react-dom";
import GifContainer from "./GifContainer";

const testGifs = [
  {
    images: {
      fixed_height: {
        url: ""
      },
      fixed_height_still: {
        url: ""
      }
    }
  }
  // ...rest of object not needed to run successfully
];
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GifContainer gifs={testGifs} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

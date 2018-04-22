import React from "react";
import GifPlayer from "react-gif-player";
import "./GifContainer.css";

const GifContainer = ({ gifs }) => {
  return (
    <div className="gif-container">
      {gifs.map((gif, index) => {
        return (
          <GifPlayer
            className="gif"
            key={index}
            gif={gif.images.fixed_height.url}
            still={gif.images["fixed_height_still"].url}
          />
        );
      })}
    </div>
  );
};

export default GifContainer;

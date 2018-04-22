import {
  FETCHING_GIFS,
  FETCHING_GIFS_SUCCESS,
  FETCHING_GIFS_FAIL
} from "../utils/Constants";

import axios from "axios";

export default function fetchGifs() {
  return dispatch => {
    dispatch({ type: FETCHING_GIFS });
    axios
      .get(
        "https://api.giphy.com/v1/gifs/trending?api_key=TT3AfKCssTsm0zrTfJWftDI2vy8ufTHr&limit=100"
      )
      .then(response => {
        dispatch({
          type: FETCHING_GIFS_SUCCESS,
          payload: response.data.data
        });
        // console.log(response.data.data);
      })
      .catch(error => {
        // console.error(error);
        dispatch({ type: FETCHING_GIFS_FAIL });
      });
  };
}

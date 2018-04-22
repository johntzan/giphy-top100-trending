import {
  FETCHING_GIFS,
  FETCHING_GIFS_SUCCESS,
  FETCHING_GIFS_FAIL
} from "../utils/Constants";

const initialState = {
  fetchingGifs: false,
  fetchingGifsSuccess: false,
  fetchingGifsFailed: false,
  gifs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_GIFS:
      return Object.assign({}, state, {
        fetchingGifs: true,
        fetchingGifsSuccess: false,
        fetchingGifsFailed: false,
        gifs: []
      });

    case FETCHING_GIFS_SUCCESS:
      return Object.assign({}, state, {
        fetchingGifs: false,
        fetchingGifsSuccess: true,
        fetchingGifsFailed: false,
        gifs: action.payload
      });

    case FETCHING_GIFS_FAIL:
      return Object.assign({}, state, {
        fetchingGifs: false,
        fetchingGifsSuccess: false,
        fetchingGifsFailed: true,
        gifs: []
      });

    default:
      return state;
  }
};

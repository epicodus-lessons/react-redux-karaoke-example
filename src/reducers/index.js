import { combineReducers } from "redux";
import selectedSong from "./selectedSong";
import songsById from "./songsById";

const rootReducer = combineReducers({
  selectedSong,
  songsById
});

export default rootReducer;

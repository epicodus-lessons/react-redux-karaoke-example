import { combineReducers } from 'redux';
import songChangeReducer from './songChangeReducer';
import lyricChangeReducer from './lyricChangeReducer';

const rootReducer = combineReducers({
  currentSongId: songChangeReducer,
  songsById: lyricChangeReducer
});

export default rootReducer;

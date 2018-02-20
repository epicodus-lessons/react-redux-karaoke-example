import constants from './../constants';
const { initialState, types } = constants;

const songChangeReducer = (state = initialState.currentSongId, action) => {
  switch (action.type) {
  case types.CHANGE_SONG:
    return action.newSelectedSongId;
  default:
    return state;
  }
};

export default songChangeReducer;

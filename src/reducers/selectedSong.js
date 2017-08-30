import constants from "./../constants";
const { defaultState, types } = constants;

const selectedSong = (state = defaultState.selectedSong, action) => {
  let newState;
  switch (action.type) {
    case types.SELECT_SONG:
      newState = Object.assign({}, state, {
        selectedSong: action.songId
      });
      return newState;
    default:
      return state;
  }
};

export default selectedSong;

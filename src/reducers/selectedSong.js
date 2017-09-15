import constants from "./../constants";
const { defaultState, types } = constants;

const selectedSong = (state = defaultState.selectedSong, action) => {
  let newState;
  let selectedSong;
  switch (action.type) {
    case types.SELECT_SONG:
      newState = Object.assign({}, state, {
        selectedSong: action.songId
      });
      selectedSong = action.songId;
      return selectedSong;
    default:
      return state;
  }
};

export default selectedSong;

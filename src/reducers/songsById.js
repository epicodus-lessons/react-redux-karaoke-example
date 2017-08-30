import constants from "./../constants";
const { defaultState, types } = constants;

const songsById = (state = defaultState.songsById, action) => {
  let song;
  let newSong;
  let newState;
  switch (action.type) {
    case types.NEXT_LINE:
      song = state[action.songId];
      const newPosition = song.arrayPosition + 1;
      const newPhrase = song.songArray[newPosition];
      newSong = Object.assign({}, song, {
        currentPhrase: newPhrase,
        arrayPosition: newPosition
      });
      newState = Object.assign({}, state, {
        [action.songId]: newSong
      });

      return newState;
    case types.RESTART_SONG:
      song = state[action.songId];
      const startPhrase = song.songArray[0];
      newSong = Object.assign({}, song, {
        currentPhrase: startPhrase,
        arrayPosition: 0
      });
      newState = Object.assign({}, state, {
        [action.songId]: newSong
      });
      return newState;
    default:
      return state;
  }
};


export default songsById;

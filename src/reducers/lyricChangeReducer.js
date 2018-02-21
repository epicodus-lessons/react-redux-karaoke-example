import constants from './../constants';
const { initialState, types } = constants;

const lyricChangeReducer = (state = initialState.songsById, action) => {
  let newSongsByIdEntry;
  let newSongsByIdStateSlice;
  switch (action.type) {
  case types.NEXT_LYRIC:
    const newArrayPosition = state[action.currentSongId].arrayPosition + 1;
    newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
      arrayPosition: newArrayPosition
    });
    newSongsByIdStateSlice = Object.assign({}, state, {
      [action.currentSongId]: newSongsByIdEntry
    });
    return newSongsByIdStateSlice;
  case types.RESTART_SONG:
    newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
      arrayPosition: 0
    });
    newSongsByIdStateSlice = Object.assign({}, state, {
      [action.currentSongId]: newSongsByIdEntry
    });
    return newSongsByIdStateSlice;
  case types.REQUEST_SONG:
    newSongsByIdEntry = {
      isFetching: true,
      title: action.title,
      songId: action.songId
    };
    newSongsByIdStateSlice = Object.assign({}, state, {
      [action.songId]: newSongsByIdEntry
    });
    return newSongsByIdStateSlice;
  case types.RECEIVE_SONG:
    newSongsByIdEntry = Object.assign({}, state[action.songId], {
      isFetching: false,
      receivedAt: action.receivedAt,
      title: action.title,
      artist: action.artist,
      songArray: action.songArray,
      arrayPosition: 0,
      songId: action.songId
    });
    newSongsByIdStateSlice = Object.assign({}, state, {
      [action.songId]: newSongsByIdEntry
    });
    return newSongsByIdStateSlice;
  default:
    return state;
  }
};

export default lyricChangeReducer;

import constants from "./../../src/constants";
import songChangeReducer from './../../src/reducers/songChangeReducer';
import lyricChangeReducer from './../../src/reducers/lyricChangeReducer';
import rootReducer from './../../src/reducers/';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

describe('Karaoke App', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  describe('lyricChangeReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(lyricChangeReducer(initialState.songsById, { type: null })).toEqual(initialState.songsById);
    });

    it('Should update currently-displayed lyric of song', () => {
      expect(lyricChangeReducer(initialState.songsById, actions.nextLyric(2))[2].arrayPosition).toEqual(initialState.songsById[2].arrayPosition + 1);
    });

    it('Should restart song', () => {
      expect(lyricChangeReducer(initialState.songsById, actions.restartSong(1))[1].arrayPosition).toEqual(0);
    });
  });

  describe('songChangeReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(songChangeReducer(initialState, { type: null })).toEqual(initialState);
    });

    it('Should change selectedSong.', () => {
      expect(songChangeReducer(initialState, actions.changeSong(2))).toEqual(2);
    });
  });

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    });

    it('Should contain logic from both reducers.', () => {
      expect(store.getState().currentSongId).toEqual(songChangeReducer(undefined, { type: null }));
      expect(store.getState().songsById).toEqual(lyricChangeReducer(undefined, { type: null }));
    });
  });

});

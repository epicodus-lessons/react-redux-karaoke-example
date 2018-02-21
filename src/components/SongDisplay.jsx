import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SongDisplay = ({ dispatch, song }) => {
  const { title, artist, songArray, arrayPosition, id } = song;
  const currentLine = songArray[arrayPosition];
  let action;
  return (
    <div>
      <h1>{title}</h1>
      <h4>{artist}</h4>
      <hr/>
      <div onClick={e => {
        e.preventDefault();
        if(!(arrayPosition === songArray.length - 1)) {
          action = {
            type: 'NEXT_LYRIC',
            currentSongId: id
          };
          dispatch(action);
        } else {
          action = {
            type: 'RESTART_SONG',
            currentSongId: id
          };
          dispatch(action);
        }
      }}>
        <h1>
          {currentLine}
        </h1>
      </div>
    </div>
  );
};

SongDisplay.propTypes = {
  song: PropTypes.object,
  id: PropTypes.number,
  title: PropTypes.string,
  artist: PropTypes.string,
  songArray: PropTypes.array,
  arrayPosition: PropTypes.number,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  const song = state.songsById[state.currentSongId];
  const songInfo = {
    id: song.songId,
    artist: song.artist,
    title: song.title,
    songArray: song.songArray,
    arrayPosition: song.arrayPosition
  };
  return {
    song: songInfo
  };
};

export default connect(mapStateToProps)(SongDisplay);

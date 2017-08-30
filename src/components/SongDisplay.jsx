import React from "react";
import styles from "./../styles/SongDisplay.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { nextLine, restartSong } from "./../actions";

const SongDisplay = ({ dispatch, song }) => {
  const { title, artist, currentPhrase, songArray, arrayPosition, songId } = song;
  return (
    <div className = {styles.songDisplay}>
      <div className = {styles.songInfo}>
        <h1>{title}</h1>
        <hr/>
        <h4>{artist}</h4>
      </div>
      <div className = {styles.phrase} onClick={e => {
        e.preventDefault();
        if(!(arrayPosition === songArray.length - 1)) {
          dispatch(nextLine(songId));
        } else {
          dispatch(restartSong(songId));
        }
      }}>
        <h1>
          {currentPhrase}
        </h1>
      </div>
    </div>
  );
};

SongDisplay.propTypes = {
  song: PropTypes.object,
  songTitle: PropTypes.string,
  artist: PropTypes.string,
  currentPhrase: PropTypes.string,
  songArray: PropTypes.array,
  arrayPosition: PropTypes.number,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  const song = state.songsById[state.selectedSong];
  const songInfo = {
    songId: song.songId,
    artist: song.artist,
    title: song.title,
    currentPhrase: song.currentPhrase,
    songArray: song.songArray,
    arrayPosition: song.arrayPosition
  }
  return {
    song: songInfo
  };
};

export default connect(
  mapStateToProps
)(SongDisplay);

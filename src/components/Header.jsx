import React from 'react';
import SongSearch from './SongSearch';

function Header(){
  return (
    <div>
      <h1>Singer</h1>
      <em>Search for a song:</em>
      <SongSearch />
    </div>
  );
}

export default Header;

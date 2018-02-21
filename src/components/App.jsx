import React from 'react';
import SongDisplay from './SongDisplay';
import SongList from './SongList';
import Header from './Header';

function App(){
  return (
    <div>
      <Header />
      <br/>
      <SongList />
      <hr/>
      <SongDisplay />
    </div>
  );
}

export default App;

import React from 'react';

function SongSearch(){
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        // ...we'll add more custom logic here later...
        console.log('SEARCHED ARTIST:');
        console.log(input.value.trim());
        //...instead of these console.log()s....
        input.value = '';
      }}>
        <input placeholder="Song Title" ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default SongSearch;

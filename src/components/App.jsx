import React from "react";
import SongDisplay from "./SongDisplay";
import Header from "./Header";
import styles from "./../styles/App.css";

function App(){
  return (
    <div className = {styles.app}>
      <Header />
      <div>
        <hr className = {styles.devider}/>  
      </div>
      <div className = "container">
        <SongDisplay />
      </div>
    </div>
  );
}

export default App;

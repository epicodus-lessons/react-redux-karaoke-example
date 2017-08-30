import React from "react";
import SongSearch from "./SongSearch";
import styles from "./../styles/Header.css";

function Header(){
  return (
    <div className = {styles.header}>
      <div className = {styles.appTitle}>
        <h1>singer</h1>
      </div>
      <SongSearch />
    </div>
  );
}

export default Header;

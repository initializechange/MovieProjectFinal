import React from "react";
import SearchBar from "./SearchBar";
import "../styles.css";

export default function TopBar(props) {
  return (
    <div className="h-64 w-screen bg-blue-400 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-white mb-4 font-bold">MovieQuery</h1>
      <SearchBar
        searchText={props.searchText}
        setSearchText={props.setSearchText}
        searchEntered={props.searchEntered}
      />
    </div>
  );
}

import React, { useState, useEffect } from "react";

import "../styles.css";

import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import TopBar from "../components/TopBar";
import MovieCardList from "../components/MovieCardList";
import { navigate } from "hookrouter";

export default function SearchScreen(props) {
  const [movies, setMovies] = useState([]);

  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center">
      <TopBar
        searchText={searchText}
        setSearchText={setSearchText}
        searchEntered={searchEntered}
      />
      <MovieCardList movieClicked={movieClicked} movies={movies} />
    </div>
  );

  function searchEntered() {
    var req = new XMLHttpRequest();
    req.open(
      "GET",
      "https://www.omdbapi.com/?apikey=63004f46&s=" + searchText,
      true
    );
    req.send();
    req.onload = function() {
      var json = JSON.parse(req.responseText);
      if (json["Error"] != null) {
        //We have an error
        alert(json["Error"]);
      } else {
        setMovies(json["Search"]);
      }
    };
  }

  function movieClicked(movieInfo) {
    navigate("/detail", false, movieInfo);
    location.reload();
  }
}

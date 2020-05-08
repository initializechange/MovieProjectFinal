import React from "react";
import MovieCard from "./MovieCard";

export default function MovieCardList(props) {
  return (
    <div>
      {props.movies.map((movie, index) => {
        return <MovieCard movieClicked={props.movieClicked} movie={movie} />;
      })}
    </div>
  );
}

import React from "react";

export default function MovieCard(props) {
  return (
    <div
      onClick={() => props.movieClicked(props.movie)}
      className="container flex flex-row shadow items-center justify-between p-6 hover:shadow-lg smallCardWidth mb-4"
    >
      <div className="flex flex-col mr-10">
        <h1 className="text-xl font-bold mb-6">{props.movie["Title"]}</h1>
        <h2 className="text-grey-300">{props.movie["Year"]}</h2>
      </div>
      <div>
        <img className="w-24 h-22" src={props.movie["Poster"]} />
      </div>
    </div>
  );
}
